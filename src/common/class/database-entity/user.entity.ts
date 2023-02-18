import { USER_ENUM_STATUS, User, USER_ENUM_REGISTER_TYPE } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNumber, IsString, Length } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserEntity implements User {
  @Expose()
  @ApiProperty({ example: 1, description: '使用者唯一標示' })
  @IsNumber()
  id!: number;

  @Expose()
  @ApiProperty({ examples: USER_ENUM_REGISTER_TYPE, description: '使用者註冊類型' })
  @IsEnum(USER_ENUM_REGISTER_TYPE)
  registerType!: USER_ENUM_REGISTER_TYPE;

  @Expose()
  @ApiProperty({ examples: USER_ENUM_STATUS, description: '使用者狀態' })
  @IsEnum(USER_ENUM_STATUS)
  status!: USER_ENUM_STATUS;

  @Expose()
  @ApiProperty({ example: 'test account', description: '使用者帳號，必須唯一。' })
  @Length(1, 50, { message: '帳戶長度限制為 1 ~ 50' })
  @IsString()
  account!: string;

  @Expose()
  @ApiProperty({ example: 'test password', description: '使用者密碼' })
  @Length(6, 128, { message: '密碼長度限制為 6 ~ 128' })
  @IsString()
  password!: string;

  @Expose()
  @ApiProperty({ example: 'salt', description: '密碼鹽' })
  @Length(1, 12)
  @IsString()
  salt!: string;

  @Expose()
  @ApiProperty({ description: '創建日期' })
  @IsDate()
  createdAt!: Date;
}
