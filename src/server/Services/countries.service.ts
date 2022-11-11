import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from '../../entities/Countries';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries) private countriesRepo: Repository<Countries>,
  ) {}

  public async findAll() {
    return await this.countriesRepo.find();
  }

  public async findOne(id) {
    return await this.countriesRepo.findOne({ where: { countryId: id } });
  }

  public async create(fields) {
    try {
      const country = await this.countriesRepo.save({
        countryId: fields.countryId,
        countryName: fields.countryName,
        region: fields.region,
        locations: fields.locations,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.countriesRepo.update(id, {
        countryId: fields.countryId,
        countryName: fields.countryName,
        region: fields.region,
        locations: fields.locations,
      });
      return await this.countriesRepo.findOne({ where: { countryId: id } });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const country = await this.countriesRepo.delete(id);
      return 'Deleted' + country.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
