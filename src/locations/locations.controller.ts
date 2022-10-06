import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
@Controller('api/location')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get()
  public async getAll() {
    return await this.locationService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.locationService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.locationService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.locationService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.locationService.delete(id);
  }
}
