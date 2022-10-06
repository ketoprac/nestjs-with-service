import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departments } from '../models/Departments';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private departmentsRepo: Repository<Departments>,
  ) {}

  public async findAll() {
    return await this.departmentsRepo.find();
  }

  public async findOne(id) {
    return await this.departmentsRepo.findOne({ where: { departmentId: id } });
  }

  public async create(fields) {
    try {
      const department = await this.departmentsRepo.save({
        departmentName: fields.departmentName,
        location: fields.location,
        manager: fields.manager,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.departmentsRepo.update(id, {
        departmentName: fields.departmentName,
        location: fields.location,
        manager: fields.manager,
      });
      return await this.departmentsRepo.findOne({
        where: { departmentId: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const department = await this.departmentsRepo.delete(id);
      return 'Deleted' + department.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
