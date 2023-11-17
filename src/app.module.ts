import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {databaseProviders} from "./db/database.providers";
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env'}) ,UserModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule {}
