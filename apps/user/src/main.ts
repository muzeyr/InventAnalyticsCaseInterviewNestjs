/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {INestApplication, Logger, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = process.env.USER_ENDPOINT;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.USER_PORT || 3000;
  installSwagger(app);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix} \n
    http://localhost:${port}/docs
    `
  );
}

bootstrap();


function installSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .addBearerAuth(
      {type: 'http', bearerFormat: 'JWT', in: 'header'},
    )
    .setTitle('User Api Gateway')
    .setDescription(`User Api Gateway (${process.env.ENV})`)
    .setContact('InventAnalytics', '', '')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'User Api Documentation',
  });
}
