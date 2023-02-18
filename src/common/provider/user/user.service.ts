import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from 'src/common/provider/prisma/prisma.service';
import { PasswordService } from '../password/password.service';
import { RegisterUserDto } from './dto/register.dto';
import { UserBasicEntity } from './entities/user.entity';
import { dtoCheckSync } from 'src/common/util/dto-check';

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService');
  constructor(private prismaService: PrismaService, private passwordService: PasswordService) {}

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
