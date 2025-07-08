import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private readonly jobRepo: Repository<Job>) {}

  create(dto: CreateJobDto): Promise<Job> {
    const job = this.jobRepo.create(dto);
    return this.jobRepo.save(job);
  }

  findAll(): Promise<Job[]> {
    return this.jobRepo.find();
  }

  async findById(id: number): Promise<Job> {
    const job = await this.jobRepo.findOne({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }
}
