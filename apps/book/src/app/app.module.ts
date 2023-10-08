import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book, Borrow, typeOrmAsyncConfig, User} from "@invent-analytics/lib";

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([User, Book, Borrow])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
