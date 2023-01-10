import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './controller/register/register.controller';
import { PrismaService } from './common/provider/prisma/prisma.service';
import { UserService } from './common/provider/user/user.service';
import { PasswordService } from './common/provider/password/password.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService, PrismaService, UserService, PasswordService],
})
export class AppModule {}
