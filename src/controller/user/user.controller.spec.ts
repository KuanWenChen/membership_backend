import { Test, TestingModule } from '@nestjs/testing';
// import { RegisterController } from './register.controller';
// import { UserService } from 'src/common/provider/user/user.service';
import { UserController } from './user.controller';
import { INestApplication } from '@nestjs/common';

import * as request from 'supertest';
import jestOpenApi from 'jest-openapi';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

describe('RegisterController', () => {
  let controller: UserController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
    }).compile();

    controller = module.get<UserController>(UserController);
    app = module.createNestApplication();
    const config = new DocumentBuilder().build();
    const document = SwaggerModule.createDocument(app, config);
    jestOpenApi(JSON.parse(JSON.stringify(document)));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('open-api-test/register', async () => {
    const res = await request(app.getHttpServer()).post('/user/register').send({
      account: 'test',
      password: 'test',
    });

    expect(res).toSatisfyApiSpec();
  });
});
