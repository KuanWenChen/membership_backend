import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UserBasicEntity } from 'src/common/provider/user/entities/user.entity';
import { dtoCheckSync } from 'src/common/util/dto-check';
import { ApiBearerAuth } from '@nestjs/swagger';

/**
 * Param decorator for managerPayload
 *
 * Auto Apply method decorator @UseGuard([JwtAuthGuard](../../../auth/guard/jwt-auth.guard.ts))
 *
 * Auto Apply method decorator @{@link ApiBearerAuth})
 */
export const JwtUser = function () {
  return createParamDecorator(
    (data: unknown, ctx: ExecutionContext): UserBasicEntity => {
      const request = ctx.switchToHttp().getRequest();
      const user = dtoCheckSync(UserBasicEntity, request.user);
      return user;
    },
    [
      (target: any, key: any) => {
        const jwtAuthGuard = UseGuards(JwtAuthGuard);
        const apiBearerAuth = ApiBearerAuth();
        jwtAuthGuard(target, key, Object.getOwnPropertyDescriptor(target, key) as PropertyDescriptor);
        apiBearerAuth(target, key, Object.getOwnPropertyDescriptor(target, key) as PropertyDescriptor);
      },
    ],
  )();
};
