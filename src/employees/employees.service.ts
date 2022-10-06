import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from '../models/Employees';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees) private employeesRepo: Repository<Employees>,
  ) {}

  public async findAll() {
    return await this.employeesRepo.find();
  }

  public async findOne(id) {
    return await this.employeesRepo.findOne({ where: { employeeId: id } });
  }

  public async create(fields) {
    try {
      const country = await this.employeesRepo.save({
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        hireDate: fields.hireDate,
        salary: fields.salary,
        commissionPct: fields.commissionPct,
        xempId: fields.xempId,
        department: fields.department,
        job: fields.job,
        manager: fields.manager,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id, fields) {
    try {
      await this.employeesRepo.update(id, {
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        hireDate: fields.hireDate,
        salary: fields.salary,
        commissionPct: fields.commissionPct,
        xempId: fields.xempId,
        department: fields.department,
        job: fields.job,
        manager: fields.manager,
      });
      return await this.employeesRepo.findOne({ where: { employeeId: id } });
    } catch (error) {
      return error.message;
    }
  }

  async delete(id) {
    try {
      const employee = await this.employeesRepo.delete(id);
      return 'Deleted' + employee.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
