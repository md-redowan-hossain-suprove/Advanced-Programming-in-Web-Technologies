import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(@InjectRepository(Application) private appRepo: Repository<Application>) {}

  async create(dto: CreateApplicationDto, cvPath: string) {
    const application = this.appRepo.create({ ...dto, cv: cvPath });
    return this.appRepo.save(application);
  }

  findAll() {
    return this.appRepo.find({ relations: ['job'] });
  }
}
