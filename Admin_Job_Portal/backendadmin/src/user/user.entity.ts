import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'pending' })
  cvStatus: string;

  @Column({ default: 'not called' })
  vivaStatus: string;

  @Column({ nullable: true })
  cvFilePath: string;
}