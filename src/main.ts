import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4400;
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Курс UlbiTV')
    .setDescription('RestAPI')
    .setVersion('1.0.0')
    .addTag('Ars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT, () =>
    console.log(`Сервер запустился на ${PORT} порту`),
  );
}
bootstrap();
