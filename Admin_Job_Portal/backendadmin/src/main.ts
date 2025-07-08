import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Frontend port
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log(`Server running on http://localhost:3000`);
}
bootstrap();
