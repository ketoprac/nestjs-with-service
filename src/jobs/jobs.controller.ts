import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
@Controller('api/job')
export class JobsController {
  constructor(private jobService: JobsService) {}

  @Get()
  public async getAll() {
    return await this.jobService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.jobService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.jobService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.jobService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.jobService.delete(id);
  }
}
