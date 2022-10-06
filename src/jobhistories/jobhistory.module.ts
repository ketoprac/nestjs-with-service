import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMulter } from '../middleware/multer.config';
import { JobHistory } from '../models/JobHistory';
import { JobHistoryController } from './jobhistory.controller';
import { JobHistoryService } from './jobhistory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobHistory]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  providers: [JobHistoryService],
  controllers: [JobHistoryController],
})
export class JobHistoryModule {}
