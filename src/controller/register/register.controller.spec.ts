import { Test, TestingModule } from '@nestjs/testing';
// import { RegisterController } from './register.controller';
// import { UserService } from 'src/common/provider/user/user.service';
import { RegisterModule } from './register.module';
import { RegisterController } from './register.controller';

describe('RegisterController', () => {
  let controller: RegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RegisterModule],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
