import { Injectable, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger('PasswordService');
  constructor(private configService: ConfigService) {}
  public async generate(password: string): Promise<{
    hash: string;
    salt: string;
  }> {
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

  private getPepper(): Buffer {
    const pepper = this.configService.get<string>('PEPPER');
    if (pepper === undefined || typeof pepper !== 'string') {
      this.logger.error('伺服器未設置環境變數 PEPPER');
      throw new HttpException(
        '伺服器環境變數錯誤',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
