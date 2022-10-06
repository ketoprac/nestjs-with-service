import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
@Controller('api/department')
export class DepartmentsController {
  constructor(private departmentService: DepartmentsService) {}

  @Get()
  public async getAll() {
    return await this.departmentService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.departmentService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.departmentService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.departmentService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}
