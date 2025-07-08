import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  reply: string;
}