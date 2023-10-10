import { Controller, Get, Post, Body, Query, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePointDto } from './dtos/create-point.dto';
import { FindByQueryDto } from './dtos/find-by-query.dto';

@Controller('/point')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createPoint(@Body() body: CreatePointDto){
    const {name, x, y} = body
    return this.appService.createPoint(name, x, y)
  }

  @Get('/findByProximity')
  findByQuery(@Query('x', ParseIntPipe) x: number,
  @Query('y', ParseIntPipe) y: number,
  @Query('d', ParseIntPipe) d: number){
    return this.appService.findByQuery(x, y, d)
  }

  @Get()
  findPoints(){
    console.log("GET ALL!")
    return this.appService.getAllPoints()
  }
}
