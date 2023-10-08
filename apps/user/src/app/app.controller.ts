import {Body, Controller, Get, Param, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {CreateUserDto, DefaultReponse, ReturnDto} from "@invent-analytics/lib";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('User Services')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  async getData() {
    return DefaultReponse.toResponseArray( await this.appService.getUsers());
  }

  @Get('/:userId')
  getById(@Param('userId') userId: string,
  ) {
    return DefaultReponse.toResponse(this.appService.getById(userId));
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return DefaultReponse.toResponse(await this.appService.create(createUserDto));
  }

  @Post('/:userId/borrow/:bookId')
  async borrow(
    @Param('userId') userId: string,
    @Param('bookId') bookId: string) {
    return DefaultReponse.toResponse(await this.appService.borrow(userId, bookId));
  }

  @Post('/:userId/return/:bookId')
  async return(
    @Param('userId') userId: string,
    @Param('bookId') bookId: string,
    @Body() returnDto: ReturnDto) {

      return DefaultReponse.toResponse(await this.appService.return(userId, bookId, returnDto));

  }

}
