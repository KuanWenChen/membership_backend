import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './controller/register/register.module';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
