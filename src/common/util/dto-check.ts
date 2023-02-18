import { ClassConstructor } from 'class-transformer';
import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { plainToClass, ClassTransformOptions } from 'class-transformer';
import { validateOrReject, validateSync, ValidatorOptions } from 'class-validator';

const logger = new Logger('DTO-check');

type DtoCheckOption = {
  transformOption: ClassTransformOptions | undefined;
  validateOption: ValidatorOptions | undefined;
};

/**
 * [Enforcing type-safe instance](https://github.com/typestack/class-transformer#enforcing-type-safe-instance)
 * trans value to Class, and call validateOrReject
 */
export async function dtoCheck<T extends object>(
  Class: ClassConstructor<T>,
  value: T,
  option: DtoCheckOption | undefined = {
    transformOption: { excludeExtraneousValues: true },
    validateOption: undefined,
  },
): Promise<T> {
  value = plainToClass(Class, value, option?.transformOption);
  await validateOrReject(value, option?.validateOption).catch((err) => {
    logger.error(err);
    throw new HttpException('DtoCheck Error', HttpStatus.INTERNAL_SERVER_ERROR);
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
    transformOption: { excludeExtraneousValues: true },
    validateOption: undefined,
  },
): T {
  value = plainToClass(Class, value, option?.transformOption);
  const err = validateSync(value, option?.validateOption);
  if (err.length > 0) {
    logger.error(err);
    throw new HttpException('DtoCheck Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  return value;
}
