import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { USER_ENUM_DOMAIN, User } from '@prisma/client';
import { PrismaService } from 'src/common/provider/prisma/prisma.service';
import { PasswordService } from '../password/password.service';
import { RegisterDto } from './user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService');
  constructor(
    private prismaService: PrismaService,
    private passwordService: PasswordService,
  ) {}

  public async register(
    registerDto: RegisterDto,
  ): Promise<Pick<User, 'id' | 'domain' | 'account'>> {
    const existId = await this.checkAccountExist(
      registerDto.domain,
      registerDto.account,
    );

    if (existId !== null) {
      throw new HttpException('帳號已存在', HttpStatus.FORBIDDEN);
    }

    const hashPassword = await this.passwordService.generate(
      registerDto.password,
    );
    const newUser = await this.prismaService.user.create({
      data: {
        domain: registerDto.domain,
        account: registerDto.account,
        password: hashPassword.hash,
        salt: hashPassword.salt,
      },
      select: { id: true, domain: true, account: true },
    });

    this.logger.log('成功註冊新使用者: ', newUser);
    return newUser;
  }

  /**
   * 若存在則回傳 id
   * @param account 要查詢的帳號
   * @param attribute 要選取的屬性
   */
  public async checkAccountExist(
    domain: USER_ENUM_DOMAIN,
    account: string,
  ): Promise<number | null> {
    const user = await this.prismaService.user.findFirst({
      where: { domain: domain, account: account },
      select: { id: true },
    });

    if (user === null) {
      return user;
    }
    return user.id;
  }
}
