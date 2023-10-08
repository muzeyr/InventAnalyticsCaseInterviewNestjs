import {Body, Controller, Get, Param, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {CreateBookDto} from "@invent-analytics/lib";
import {ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags('Book Services')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getBooks();
  }

  @Get('/:bookId')
  getById(@Param('bookId') bookId: string,
  ) {
    return this.appService.getById(bookId);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {

    return await this.appService.create(createBookDto);
  }

}
