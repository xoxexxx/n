import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Data } from './data.entity';
import { TData } from './data.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DataService {
  constructor(@InjectRepository(Data) private readonly dataRepository: Repository<Data>) {}

  findAll() {
    return this.dataRepository.find();
  }

  async create(dto: TData): Promise<TData> {
    const d = this.dataRepository.create(dto)
    const result = this.dataRepository.save(d)
    return result
  }
}