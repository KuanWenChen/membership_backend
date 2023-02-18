import { Injectable, HttpStatus, HttpException, Logger, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import SecretConfig from 'src/config/secret.environment';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger('PasswordService');
  constructor(
    @Inject(SecretConfig.KEY)
    private secretConfig: ConfigType<typeof SecretConfig>,
  ) {}
  public async generate(password: string): Promise<{ hash: string; salt: string }> {
    const salt = this.generateSalt();
    const pepper = this.getPepper();

    const hash = await argon2.hash(password, {
      salt: Buffer.from(salt, 'ascii'),
      secret: pepper,
    });

    return {
      hash: hash,
      salt: salt,
    };
  }

  public async verify(password: string, salt: string, hash: string): Promise<boolean> {
    const pepper = this.getPepper();
    return argon2.verify(hash, password, {
      salt: Buffer.from(salt),
      secret: pepper,
    });
  }

  private getPepper(): Buffer {
    const pepper = this.secretConfig.pepper;
    if (pepper === undefined || typeof pepper !== 'string') {
      this.logger.error('伺服器未設置環境變數 PEPPER');
      throw new HttpException('伺服器環境變數錯誤', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return Buffer.from(pepper, 'ascii');
  }

  private generateSalt(length = 12): string {
    let salt = '';
    for (let i = 0; i < length; i++) {
      //避開 0 跟 127
      salt += String.fromCharCode(Math.floor(Math.random() * 125) + 1);
    }

    return salt;
  }
}
