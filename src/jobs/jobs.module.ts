import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMulter } from '../middleware/multer.config';
import { Jobs } from '../models/Jobs';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Jobs]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
