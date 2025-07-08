import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepo: Repository<Contact>, // ✅ Inject Repository
  ) {}

  // ✅ Save contact message
  async create(dto: CreateContactDto): Promise<Contact> {
    const contact = this.contactRepo.create(dto); // ✅ Map DTO to entity
    return await this.contactRepo.save(contact);  // ✅ Save to DB
  }

  // ✅ Get all messages
  async findAll(): Promise<Contact[]> {
    return await this.contactRepo.find();
  }
}
