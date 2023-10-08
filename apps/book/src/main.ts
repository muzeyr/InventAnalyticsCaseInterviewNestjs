/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {INestApplication, Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = process.env.BOOK_ENDPOINT;
  app.setGlobalPrefix(globalPrefix);
  installSwagger(app);
  const port = process.env.BOOK_PORT || 3000;
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
    .setTitle('Book Api Gateway')
    .setDescription(`Book Api Gateway (${process.env.ENV})`)
    .setContact('InventAnalytics', '', '')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'User Api Documentation',
  });
}
