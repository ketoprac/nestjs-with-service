import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jobs } from '../models/Jobs';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Jobs)
    private jobsRepo: Repository<Jobs>,
  ) {}

  public async findAll() {
    return await this.jobsRepo.find();
  }

  public async findOne(id) {
    return await this.jobsRepo.findOne({ where: { jobId: id } });
  }

  public async create(fields) {
    try {
      const department = await this.jobsRepo.save({
        jobId: fields.jobId,
        jobTitle: fields.jobTitle,
        minSalary: fields.minSalary,
        maxSalary: fields.maxSalary,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.jobsRepo.update(id, {
        jobTitle: fields.jobTitle,
        minSalary: fields.minSalary,
        maxSalary: fields.maxSalary,
      });
      return await this.jobsRepo.findOne({
        where: { jobId: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const job = await this.jobsRepo.delete(id);
      return 'Deleted' + job.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
