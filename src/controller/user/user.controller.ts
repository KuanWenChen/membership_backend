import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/common/provider/user/user.service';
import { RegisterDto } from 'src/common/provider/user/dto/register.dto';
import { User } from '@prisma/client';
import { Logger } from '@nestjs/common';

@Controller('user')
export class UserController {
  private logger = new Logger('RegisterController');
  constructor(private userService: UserService) {}

  @Post('/register')
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<Pick<User, 'id' | 'domain' | 'account'>> {
    const result = await this.userService.register(registerDto);
    return result;
  }
}
