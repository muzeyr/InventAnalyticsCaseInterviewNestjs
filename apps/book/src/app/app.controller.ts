import {Body, Controller, Get, Param, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {CreateBookDto, DefaultReponse} from "@invent-analytics/lib";
import {ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags('Book Services')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
 async getData() {
    return DefaultReponse.toResponseArray(await this.appService.getBooks());
  }

  @Get('/:bookId')
  async getById(@Param('bookId') bookId: string,
  ) {
    return DefaultReponse.toResponse(await this.appService.getById(bookId));
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {

    return DefaultReponse.toResponse(await this.appService.create(createBookDto));
  }

}
