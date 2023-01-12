import { Module } from '@nestjs/common';
import { PasswordModule } from '../password/password.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PasswordModule, PrismaModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
