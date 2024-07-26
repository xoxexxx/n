import { Body, Controller, Get, Post } from '@nestjs/common';
import { DateService } from './date.service';
import { TDate } from './date.interface';

@Controller("/")
export class DateController {
  constructor(private readonly dateService: DateService) {}
  
  @Get()
  findAll() {
    return this.dateService.findAll();
  }

  @Post()
  create(@Body() dto: TDate) {
    return this.dateService.create(dto)
  }
}
