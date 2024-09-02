import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validate data
  app.useGlobalPipes(new ValidationPipe());

  // CORS
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  // Run server
  await app.listen(3333);
  console.log(`Server listen to: http://localhost:${3333}`);
}

bootstrap();
