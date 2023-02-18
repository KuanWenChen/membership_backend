import { Injectable, OnModuleInit, INestApplication, Logger } from '@nestjs/common';

import { PrismaClient, Prisma, User } from '@prisma/client';

// middleware https://www.prisma.io/docs/concepts/components/prisma-client/middleware

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('PrismaService');
  constructor() {
    super();
    this.$use(this.logMiddleware.bind(this));
  }
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connect to Database succeed!');
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  // middleware
  private async logMiddleware(
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<any>,
  ) {
    const result = await next(params);
    if (params.action === 'create' || params.action === 'createMany' || params.action === 'update') {
      this.logger.verbose(
        `${params.action} ${params.model}: `,
        this.removeSensitiveData(params.model, params.args?.data),
      );
    }

    if (params.action === 'upsert') {
      this.logger.verbose(`${params.action} ${params.model}: `, {
        where: params.args?.where,
        create: this.removeSensitiveData(params.model, params.args?.create),
        update: this.removeSensitiveData(params.model, params.args?.update),
        include: params.args.include,
      });
    }

    if (params.action === 'delete') {
      this.logger.verbose(`${params.action} ${params.model}: `, {
        where: params.args?.where,
        include: params.args?.include,
      });
    }

    if (params.action === 'deleteMany') {
      this.logger.verbose(`${params.action} ${params.model}: `, {
        where: params.args?.where,
      });
    }

    return result;
  }

  private removeSensitiveData(modelsName: Prisma.ModelName | undefined, data: any | Array<any>) {
    const hiddenText = '<HIDDEN-COLUMN>';

    if (Array.isArray(data) === true) {
      return data.map((value: any) => {
        return this.removeSensitiveData(modelsName, value);
      });
    }

    if (modelsName === 'User') {
      const newData: Partial<User> = JSON.parse(JSON.stringify(data));

      if (newData?.password) newData.password = hiddenText;
      if (newData?.salt) newData.salt = hiddenText;

      return newData;
    }

    return data;
  }
}
