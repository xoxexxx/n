import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DataSource} from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {join} from 'path';
import { DataModule } from './data/date.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options as any).initialize();
        return dataSource;  
      }
    }),
    DataModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
