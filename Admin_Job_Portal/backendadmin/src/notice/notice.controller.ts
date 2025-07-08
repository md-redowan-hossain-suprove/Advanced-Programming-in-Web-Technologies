// src/notice/notice.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { Delete } from '@nestjs/common';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get()
  async getAllNotices() {
    return this.noticeService.findAll();
  }

  @Post()
  async createNotice(@Body() dto: CreateNoticeDto) {
    return this.noticeService.createNotice(dto);
  }

  @Patch(':id')
  async updateNotice(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateNoticeDto,
  ) {
    return this.noticeService.updateNotice(id, dto);
  }

  @Delete(':id')
async deleteNotice(@Param('id', ParseIntPipe) id: number) {
  return this.noticeService.deleteNotice(id);
}
}
