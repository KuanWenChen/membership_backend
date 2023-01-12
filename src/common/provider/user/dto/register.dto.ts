import { Length, IsEnum } from 'class-validator';
import { USER_ENUM_DOMAIN } from '@prisma/client';

export class RegisterDto {
  @IsEnum(USER_ENUM_DOMAIN, { message: 'domain 不存在' })
  domain: USER_ENUM_DOMAIN = USER_ENUM_DOMAIN.MEMBERSHIP;

  @Length(1, 50, { message: '帳戶長度限制為 1 ~ 50' })
  account!: string;

  @Length(1, 128, { message: '密碼長度限制為 1 ~ 128' })
  password!: string;
}
