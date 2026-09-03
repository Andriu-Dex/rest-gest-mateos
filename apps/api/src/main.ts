import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { validateEnvironment } from './config/environment.js';

async function bootstrap() {
  validateEnvironment(process.env);
  const app = await NestFactory.create(AppModule);
  const apiPort = Number(process.env.API_PORT ?? 3000);
  const webPort = Number(process.env.WEB_PORT ?? 5173);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: `http://localhost:${webPort}`,
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('RestGest Mateos API')
    .setDescription('Technical API foundation for RestGest Mateos')
    .setVersion('0.1.0')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, documentFactory);

  await app.listen(apiPort);
}
await bootstrap();
