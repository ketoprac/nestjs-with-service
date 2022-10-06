import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
@Controller('api/employee')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  public async getAll() {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.employeeService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.employeeService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.employeeService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }
}
