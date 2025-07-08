import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportMessage } from './support-message.entity';
import { CreateSupportMessageDto } from './dto/create-support-message.dto';

@Injectable()
export class SupportMessageService {
  constructor(
    @InjectRepository(SupportMessage)
    private repo: Repository<SupportMessage>,
  ) {}

  async create(dto: CreateSupportMessageDto): Promise<SupportMessage> {
    const supportMessage = this.repo.create(dto);
    return this.repo.save(supportMessage);
  }

  async findAll(): Promise<SupportMessage[]> {
    return this.repo.find();
  }
}
