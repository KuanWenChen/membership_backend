import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');
  getHello(): string {
    this.logger.log('Hello Logger!');
    return 'Hello World!';
  }
}
