import { Injectable, Logger } from '@nestjs/common';

import { UserBasicEntity, UserTokenEntity } from '../user/entities/user.entity';
import { dtoCheckSync } from 'src/common/util/dto-check';
import { instanceToPlain } from 'class-transformer';
import { plainToClass } from 'class-transformer';
import { UserEntity } from 'src/common/class/database-entity/user.entity';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  private readonly logger = new Logger('TokenService');
  constructor(private jwtService: JwtService) {}

  generateUserToken(userBasicEntity: UserBasicEntity): string {
    userBasicEntity = dtoCheckSync(UserBasicEntity, userBasicEntity);
    const plainPayload = instanceToPlain(userBasicEntity);

    const token = this.jwtService.sign(plainPayload, {
      expiresIn: this.userTokenExpireIn(),
    });
    return token;
  }

  verifyUserToken(userToken: string): UserTokenEntity {
    const decode = this.jwtService.verify(userToken);
    const userEntity = plainToClass(UserEntity, decode);
    const userTokenEntity = dtoCheckSync(UserTokenEntity, { token: userToken, ...userEntity });

    return userTokenEntity;
  }

  private userTokenExpireIn() {
    return 1000 * 60 * 60 * 24;
  }
}
