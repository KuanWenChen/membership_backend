import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserController } from './controller/user/user.controller';

import { PrismaService } from './common/provider/prisma/prisma.service';
import { UserService } from 'src/common/provider/user/user.service';
import { PasswordService } from './common/provider/password/password.service';
import { TokenService } from './common/provider/token/token.service';

import configuration from './config/configuration';
import secretConfig from './config/secret.environment';
import { HttpRequestLoggerMiddleware } from './common/middleware/http-request-logger/http-request-logger.middleware';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration, secretConfig] })],
  controllers: [UserController],
  providers: [PrismaService, UserService, PasswordService, TokenService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpRequestLoggerMiddleware).forRoutes('*');
  }
}
