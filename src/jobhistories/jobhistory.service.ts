import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobHistory } from '../models/JobHistory';

@Injectable()
export class JobHistoryService {
  constructor(
    @InjectRepository(JobHistory)
    private jobHistoryRepo: Repository<JobHistory>,
  ) {}

  public async findAll() {
    return await this.jobHistoryRepo.find();
  }

  public async findOne(id) {
    return await this.jobHistoryRepo.findOne({ where: { employeeId: id } });
  }

  public async create(fields) {
    try {
      const jobHistory = await this.jobHistoryRepo.save({
        employeeId: fields.employeeId,
        startDate: fields.startDate,
        endDate: fields.endDate,
        department: fields.department,
        employee: fields.employee,
        job: fields.job,
      });
      return jobHistory;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.jobHistoryRepo.update(id, {
        startDate: fields.startDate,
        endDate: fields.endDate,
        department: fields.department,
        employee: fields.employee,
        job: fields.job,
      });
      return await this.jobHistoryRepo.findOne({ where: { employeeId: id } });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const jobHistory = await this.jobHistoryRepo.delete(id);
      return 'Deleted' + jobHistory.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
