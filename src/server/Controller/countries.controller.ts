import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountriesService } from '../Services/countries.service';
@Controller('api/country')
export class CountriesController {
  constructor(private countryService: CountriesService) {}

  @Get()
  public async getAll() {
    return await this.countryService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.countryService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.countryService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.countryService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.countryService.delete(id);
  }
}
