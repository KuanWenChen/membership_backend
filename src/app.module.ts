import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UserController } from './controller/user/user.controller';

import { PrismaService } from './common/provider/prisma/prisma.service';
import { UserService } from 'src/common/provider/user/user.service';
import { PasswordService } from './common/provider/password/password.service';
import { TokenService } from './common/provider/token/token.service';

import configuration from './config/configuration';
import secretConfig from './config/secret.environment';
import { HttpRequestLoggerMiddleware } from './common/middleware/http-request-logger/http-request-logger.middleware';
import { JwtStrategy } from './auth/strategy/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration, secretConfig] }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: 1000 * 60 * 60 * 24 },
    }),
  ],
  controllers: [UserController],
  providers: [PrismaService, UserService, PasswordService, TokenService, JwtStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpRequestLoggerMiddleware).forRoutes('*');
  }
}
