import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { UserService } from 'src/common/provider/user/user.service';
import { UserBasicEntity } from 'src/common/provider/user/entities/user.entity';
import { RegisterUserDto } from 'src/common/provider/user/dto/register.dto';
import { User } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('/user')
export class UserController {
  private logger = new Logger('RegisterController');
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: '註冊新的使用者' })
  @Post('/register')
  @ApiCreatedResponse({ type: UserBasicEntity })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterUserDto): Promise<Pick<User, 'id' | 'account'>> {
    const result = await this.userService.register(registerDto);
    return result;
  }
}
