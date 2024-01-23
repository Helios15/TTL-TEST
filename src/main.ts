import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  // app.use(cookieParser());
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('TTL-TEST API')
    .setDescription('TTL-TEST API')
    .setVersion('1.0')
    .addTag('TTL-TEST api interface')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api/v1`, app, document);
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
