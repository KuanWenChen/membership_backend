import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma, LOGIN_RECORD_ENUM_CODE } from '@prisma/client';

import { dtoCheckSync } from 'src/common/util/dto-check';

import { PrismaService } from 'src/common/provider/prisma/prisma.service';
import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';

import { RegisterUserDto } from './dto/register.dto';
import { UserBasicEntity, UserTokenEntity } from './entities/user.entity';
import { UserLoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private passwordService: PasswordService,
    private tokenService: TokenService,
  ) {}

  public async register(registerDto: RegisterUserDto): Promise<UserBasicEntity> {
    registerDto = dtoCheckSync(RegisterUserDto, registerDto);
    const existId = await this.checkAccountExist(registerDto.account);

    if (existId !== null) {
      throw new HttpException('帳號已存在', HttpStatus.FORBIDDEN);
    }

    const hashPassword = await this.passwordService.generate(registerDto.password);
    const newUser = await this.prismaService.user.create({
      data: {
        account: registerDto.account,
        password: hashPassword.hash,
        salt: hashPassword.salt,
      },
      select: this.getUserBasicSelect(),
    });

    return newUser;
  }

  public async login(userLoginDto: UserLoginDto): Promise<UserTokenEntity> {
    const userId = await this.checkAccountExist(userLoginDto.account);
    if (userId === null) throw new HttpException('使用者不存在或密碼錯誤', HttpStatus.UNAUTHORIZED);

    const user = await this.prismaService.user.findFirst({
      where: { id: userId },
      select: { password: true, salt: true, ...this.getUserBasicSelect() },
    });

    if (user === null) throw new HttpException('使用者不存在或密碼錯誤', HttpStatus.UNAUTHORIZED);

    const verify = await this.passwordService.verify(userLoginDto.password, user.salt, user.password);
    if (verify === false) {
      await this.prismaService.loginRecord.create({ data: { userId: user.id, code: LOGIN_RECORD_ENUM_CODE.FAILED } });
      throw new HttpException('使用者不存在或密碼錯誤', HttpStatus.UNAUTHORIZED);
    }

    await this.prismaService.loginRecord.create({ data: { userId: user.id, code: LOGIN_RECORD_ENUM_CODE.SUCCEED } });
    const token = this.tokenService.generateUserToken(user);
    const userTokenEntity = dtoCheckSync(UserTokenEntity, { ...user, token: token });
    return userTokenEntity;
  }

  /**
   * 若存在則回傳 id
   * @param account 要查詢的帳號
   * @param attribute 要選取的屬性
   */
  public async checkAccountExist(account: string): Promise<number | null> {
    const user = await this.prismaService.user.findFirst({
      where: { account: account },
      select: { id: true },
    });

    if (user === null) return null;
    return user.id;
  }

  private getUserBasicSelect() {
    const select = {
      id: true,
      account: true,
      status: true,
      registerType: true,
      createdAt: true,
    } satisfies Required<Pick<Prisma.UserSelect, keyof UserBasicEntity>>;
    return select;
  }
}
