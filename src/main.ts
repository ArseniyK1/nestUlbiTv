import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4400
  app.setGlobalPrefix('api')
  await app.listen(PORT, () => console.log(`Сервер запустился на ${PORT} порту`));
}
bootstrap();
