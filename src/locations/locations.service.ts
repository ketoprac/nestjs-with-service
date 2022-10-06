import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locations } from '../models/Locations';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations) private locationsRepo: Repository<Locations>,
  ) {}

  public async findAll() {
    return await this.locationsRepo.find();
  }

  public async findOne(id) {
    return await this.locationsRepo.findOne({ where: { locationId: id } });
  }

  public async create(fields) {
    try {
      const location = await this.locationsRepo.save({
        streetAddress: fields.streetAddress,
        postalCode: fields.postalCode,
        city: fields.city,
        stateProvince: fields.stateProvince,
        departments: fields.departments,
        country: fields.country,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.locationsRepo.update(id, {
        streetAddress: fields.streetAddress,
        postalCode: fields.postalCode,
        city: fields.city,
        stateProvince: fields.stateProvince,
        departments: fields.departments,
        country: fields.country,
      });
      return await this.locationsRepo.findOne({ where: { locationId: id } });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const location = await this.locationsRepo.delete(id);
      return 'Deleted' + location.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
