import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMulter } from '../middleware/multer.config';
import { Locations } from '../models/Locations';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Locations]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
