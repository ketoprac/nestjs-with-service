import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from '../models/Regions';
import { Countries } from '../models/Countries';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigMulter } from '../middleware/multer.config';
@Module({
  imports: [
    TypeOrmModule.forFeature([Regions, Countries]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [RegionsService],
  controllers: [RegionsController],
})
export class RegionsModule {}
