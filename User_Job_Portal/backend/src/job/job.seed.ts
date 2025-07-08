import { Injectable, OnModuleInit } from '@nestjs/common';
import { JobService } from './job.service';

@Injectable()
export class JobSeed implements OnModuleInit {
  constructor(private readonly jobService: JobService) {}

  async onModuleInit() {
    const jobs = await this.jobService.findAll();
    if (jobs.length === 0) {
      await this.jobService.create({
        name: 'Frontend Developer',
        description: 'Build UI components with React.',
        salary: 60000,
        type: 'remote',
      });
      await this.jobService.create({
        name: 'Backend Developer',
        description: 'Create APIs and manage databases.',
        salary: 70000,
        type: 'on-site',
      });
      await this.jobService.create({
        name: 'Full Stack Engineer',
        description: 'Handle frontend and backend development.',
        salary: 75000,
        type: 'hybrid',
      });
    }
  }
}
