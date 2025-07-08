import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Job } from '../job/job.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  cv: string;

  @Column()
  jobId: number;

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'jobId' })
  job: Job;
}
