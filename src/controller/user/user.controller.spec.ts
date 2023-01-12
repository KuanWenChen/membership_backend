import { Test, TestingModule } from '@nestjs/testing';
// import { RegisterController } from './register.controller';
// import { UserService } from 'src/common/provider/user/user.service';
import { UserModule } from './user.module';
import { UserController } from './user.controller';

describe('RegisterController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
