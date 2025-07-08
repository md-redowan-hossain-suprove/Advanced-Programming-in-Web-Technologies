import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './complaint.entity';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint)
    private complaintRepo: Repository<Complaint>,
  ) {}

  findAll(): Promise<Complaint[]> {
    return this.complaintRepo.find();
  }

  async replyToComplaint(id: number, reply: string): Promise<Complaint> {
    const complaint = await this.complaintRepo.findOne({ where: { id } });
    if (!complaint) {
      throw new Error('Complaint not found');
    }
    complaint.reply = reply;
    return this.complaintRepo.save(complaint);
  }
}
