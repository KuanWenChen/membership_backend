import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserController } from './controller/user/user.controller';

import { PrismaService } from './common/provider/prisma/prisma.service';
import { UserService } from 'src/common/provider/user/user.service';
import { PasswordService } from './common/provider/password/password.service';

import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [UserController],
  providers: [PrismaService, UserService, PasswordService],
})
export class AppModule {}
