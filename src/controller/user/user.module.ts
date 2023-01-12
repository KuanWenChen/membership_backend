import { Module } from '@nestjs/common';
import { UserModule as UserServiceModule } from 'src/common/provider/user/user.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserServiceModule],
  controllers: [UserController],
})
export class UserModule {}
