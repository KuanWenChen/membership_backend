import { Inject, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

import SecretConfig from 'src/config/secret.environment';
import { UserBasicEntity, UserTokenEntity } from '../user/entities/user.entity';
import { dtoCheckSync } from 'src/common/util/dto-check';
import { instanceToPlain } from 'class-transformer';
import { plainToClass } from 'class-transformer';
import { UserEntity } from 'src/common/class/database-entity/user.entity';

@Injectable()
export class TokenService {
  private readonly logger = new Logger('TokenService');
  constructor(
    @Inject(SecretConfig.KEY)
    private secretConfig: ConfigType<typeof SecretConfig>,
  ) {}

  generateUserToken(userBasicEntity: UserBasicEntity): string {
    userBasicEntity = dtoCheckSync(UserBasicEntity, userBasicEntity);
    const plainPayload = instanceToPlain(userBasicEntity);
    const token = sign(plainPayload, this.getJwtSecret(), {
      expiresIn: this.userTokenExpireIn(),
    });
    return token;
  }

  verifyUserToken(userToken: string): UserTokenEntity {
    const decode = verify(userToken, this.getJwtSecret());
    const userEntity = plainToClass(UserEntity, decode);
    const userTokenEntity = dtoCheckSync(UserTokenEntity, { token: userToken, ...userEntity });

    return userTokenEntity;
  }

  private userTokenExpireIn() {
    return 1000 * 60 * 60 * 24;
  }

  private getJwtSecret() {
    const jwtSecret = this.secretConfig.jwtSecret;
    if (jwtSecret === undefined || typeof jwtSecret !== 'string') {
      this.logger.error('伺服器未設置環境變數 jwtSecret');
      throw new HttpException('伺服器環境變數錯誤', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return Buffer.from(jwtSecret, 'ascii');
  }
}
