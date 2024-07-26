import { Module } from '@nestjs/common';
import { DateController } from './date.controller';
import { DateService } from './date.service';
import { Date } from './data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Date])],
  exports: [DateService],
  controllers: [DateController],
  providers: [DateService]
})
export class DataModule {}