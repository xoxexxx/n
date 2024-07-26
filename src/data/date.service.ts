import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Date } from './data.entity';
import { TDate } from './date.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DateService {
  constructor(@InjectRepository(Date) private readonly dateRepository: Repository<Date>) {}

  findAll() {
    return this.dateRepository.find();
  }

  async create(dto: TDate): Promise<TDate> {
    const d = this.dateRepository.create(dto)
    const result = this.dateRepository.save(d)
    return result
  }
}