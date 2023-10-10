import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePointDto } from './dtos/create-point.dto';
import { FindByQueryDto } from './dtos/find-by-query.dto';

@Controller('/point')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createPoint(@Body() body: CreatePointDto){
    //return this app.service.create()
  }

  @Get()
  findPoints(){
    //return this.app.service.find()
  }

  @Get()
  findByQuery(@Query() query: FindByQueryDto){

  }

  //@Get(queries)
  
}
