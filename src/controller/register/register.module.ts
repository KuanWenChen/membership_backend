import { Module } from '@nestjs/common';
import { UserModule } from 'src/common/provider/user/user.module';
import { RegisterController } from './register.controller';

@Module({
  imports: [UserModule],
  controllers: [RegisterController],
})
export class RegisterModule {}
