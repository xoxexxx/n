import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { TData } from './data.interface';

@Controller("/api")
export class DataController {
  constructor(private readonly dataService: DataService) {}
  
  @Get()
  findAll() {
    return this.dataService.findAll();
  }

  @Post()
  create(@Body() dto: TData) {
    return this.dataService.create(dto)
  }
}
