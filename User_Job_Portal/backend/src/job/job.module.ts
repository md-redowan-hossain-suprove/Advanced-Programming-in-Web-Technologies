import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './job.entity';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { JobSeed } from './job.seed';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobService, JobSeed],
  controllers: [JobController],
})
export class JobModule {}

