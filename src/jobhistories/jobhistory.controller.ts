import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobHistoryService } from './jobhistory.service';
@Controller('api/job_history')
export class JobHistoryController {
  constructor(private jobHistoryService: JobHistoryService) {}

  @Get()
  public async getAll() {
    return await this.jobHistoryService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.jobHistoryService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.jobHistoryService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.jobHistoryService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.jobHistoryService.delete(id);
  }
}
