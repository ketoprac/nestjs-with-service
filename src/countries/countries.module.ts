import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMulter } from '../middleware/multer.config';
import { Countries } from '../models/Countries';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Countries]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
