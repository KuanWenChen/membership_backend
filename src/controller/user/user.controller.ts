import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { UserService } from 'src/common/provider/user/user.service';
import { UserBasicEntity, UserTokenEntity } from 'src/common/provider/user/entities/user.entity';
import { RegisterUserDto } from 'src/common/provider/user/dto/register.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserLoginDto } from 'src/common/provider/user/dto/login.dto';

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiOperation({ summary: '使用者註冊', description: '註冊新的使用者' })
  @ApiResponse({ status: HttpStatus.CREATED, type: UserBasicEntity })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterUserDto): Promise<UserBasicEntity> {
    const result = await this.userService.register(registerDto);
    return result;
  }

  @Post('/login')
  @ApiOperation({ summary: '使用者登入', description: '' })
  @ApiResponse({ status: HttpStatus.OK, type: UserBasicEntity })
  @HttpCode(HttpStatus.OK)
  async login(@Body() userLoginDto: UserLoginDto): Promise<UserTokenEntity> {
    const result = await this.userService.login(userLoginDto);
    return result;
  }
}
