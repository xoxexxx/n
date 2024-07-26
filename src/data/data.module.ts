import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { Data } from './data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  exports: [DataService],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}