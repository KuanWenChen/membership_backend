import { ClassConstructor } from 'class-transformer';
import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { plainToClass, ClassTransformOptions } from 'class-transformer';
import { validateOrReject, validateSync, ValidatorOptions, ValidationError } from 'class-validator';
// import { RpcException } from '@nestjs/microservices';

const logger = new Logger('DTO-check');

type DtoCheckOption = {
  transformOption?: ClassTransformOptions | undefined;
  validateOption?: ValidatorOptions | undefined;
  badRequest?: boolean;
  rpcRequest?: boolean;
};

const DEFAULT_TRANSFORM_OPTION: ClassTransformOptions = { excludeExtraneousValues: true, exposeDefaultValues: true };
function toDtoCheckOption(option: DtoCheckOption): DtoCheckOption {
  if (option === undefined) option = {};
  if (option?.transformOption === undefined) option.transformOption = DEFAULT_TRANSFORM_OPTION;
  if (option?.badRequest === undefined) option.badRequest = false;
  if (option?.rpcRequest === undefined) option.rpcRequest = false;
  return option;
}

/**
 * [Enforcing type-safe instance](https://github.com/typestack/class-transformer#enforcing-type-safe-instance)
 * trans value to Class, and call validateOrReject
 */
export async function dtoCheck<T extends object>(
  Class: ClassConstructor<T>,
  value: T,
  option: DtoCheckOption | undefined = {
    transformOption: DEFAULT_TRANSFORM_OPTION,
    validateOption: undefined,
    badRequest: false,
    rpcRequest: false,
  },
): Promise<T> {
  option = toDtoCheckOption(option);

  value = plainToClass(Class, value, option?.transformOption);
  await validateOrReject(value, option?.validateOption).catch((errList) => {
    if (option?.badRequest !== true) {
      logger.error(Class.name);
      logger.error(errList);
    }

    if (option?.badRequest !== true) {
      throwError('DtoCheck Error', HttpStatus.INTERNAL_SERVER_ERROR, option);
    } else {
      throwError(asErrorMessageList(errList), HttpStatus.BAD_REQUEST, option);
    }
  });
  return value;
}

/**
 * [Enforcing type-safe instance](https://github.com/typestack/class-transformer#enforcing-type-safe-instance)
 * trans value to Class, and call validateSync
 */
export function dtoCheckSync<T extends object>(
  Class: ClassConstructor<T>,
  value: T,
  option: DtoCheckOption | undefined = {
    transformOption: DEFAULT_TRANSFORM_OPTION,
    validateOption: undefined,
    badRequest: false,
    rpcRequest: false,
  },
): T {
  option = toDtoCheckOption(option);
  value = plainToClass(Class, value, option?.transformOption);
  const errList = validateSync(value, option?.validateOption);
  if (errList.length > 0) {
    if (option?.badRequest !== true) {
      logger.error(Class.name);
      logger.error(errList);
    }

    if (option?.badRequest !== true) {
      throwError('DtoCheck Error', HttpStatus.INTERNAL_SERVER_ERROR, option);
    } else {
      throwError(asErrorMessageList(errList), HttpStatus.BAD_REQUEST, option);
    }
  }
  return value;
}

function asErrorMessageList(errList: ValidationError[]) {
  let errMessageList: string[] = [];
  for (let i = 0; i < errList.length; i++) {
    const err: ValidationError = errList[i];
    if (err?.constraints !== undefined) {
      errMessageList = errMessageList.concat(Object.values(err.constraints));
    }
  }
  return errMessageList;
}

function throwError(msg: any, code: HttpStatus, option: DtoCheckOption) {
  throw new HttpException(msg, code);
  option;
  // if (option?.rpcRequest === true) {
  //   throw new RpcException(JSON.stringify(msg));
  // } else {
  //   throw new HttpException(msg, code);
  // }
}
