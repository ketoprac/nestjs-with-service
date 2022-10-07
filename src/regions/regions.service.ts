import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regions } from '../models/Regions';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions) private regionsRepo: Repository<Regions>,
  ) {}
  public async findAll() {
    return await this.regionsRepo.find();
  }

  public async findOne(id) {
    return await this.regionsRepo.findOne({ where: { regionId: id } });
  }
  public async create(file, fields) {
    try {
      if (file) {
        const region = await this.regionsRepo.save({
          regionName: fields.regionName,
          regionPhoto: file.file ? file.file[0].originalname : null,
          regionFile: file.foto ? file.foto[0].originalname : null,
        });
        return region;
      }
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, file, fields) {
    try {
      if (file) {
        await this.regionsRepo.update(id, {
          regionName: fields.regionName,
          regionPhoto: file.file ? file.file[0].originalname : null,
          regionFile: file.foto ? file.foto[0].originalname : null,
        });
        return await this.regionsRepo.findOne({ where: { regionId: id } });
      }
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const region = await this.regionsRepo.delete(id);
      return 'Delete' + region.affected + 'rows';
    } catch (error) {
      return error.message;
    }
  }
}
