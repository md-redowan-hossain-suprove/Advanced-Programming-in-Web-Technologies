// src/notice/notice.service.ts
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notice } from './notice.entity';
import { CreateNoticeDto } from './dto/create-notice.dto';

@Injectable()
export class NoticeService implements OnModuleInit {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepo: Repository<Notice>,
  ) {}

  async onModuleInit() {
    const count = await this.noticeRepo.count();
    if (count === 0) {
      const defaultNotices: CreateNoticeDto[] = [
        {
          title: 'Welcome to Job Portal',
          content: 'This portal helps you find your dream job.',
        },
        {
          title: 'Scheduled Maintenance',
          content: 'The system will be down for maintenance on Sunday 12 AM - 2 AM.',
        },
      ];

      for (const dto of defaultNotices) {
        const notice = this.noticeRepo.create(dto);
        await this.noticeRepo.save(notice);
      }

      console.log('✅ Default notices inserted.');
    }
  }

  async findAll(): Promise<Notice[]> {
    return this.noticeRepo.find();
  }

  async createNotice(dto: CreateNoticeDto): Promise<Notice> {
    const notice = this.noticeRepo.create(dto);
    return this.noticeRepo.save(notice);
  }

  async updateNotice(id: number, dto: CreateNoticeDto): Promise<Notice> {
    const notice = await this.noticeRepo.findOne({ where: { id } });
    if (!notice) {
      throw new NotFoundException('Notice not found');
    }
    notice.title = dto.title;
    notice.content = dto.content;
    return this.noticeRepo.save(notice);
  }

  async deleteNotice(id: number): Promise<{ deleted: boolean }> {
  const notice = await this.noticeRepo.findOne({ where: { id } });
  if (!notice) {
    throw new NotFoundException('Notice not found');
  }
  await this.noticeRepo.remove(notice);
  return { deleted: true };
}

}
