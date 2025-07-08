import { Controller, Post, Body, Get } from '@nestjs/common';
import { SupportMessageService } from './support-message.service';
import { CreateSupportMessageDto } from './dto/create-support-message.dto';

@Controller('support-messages')
export class SupportMessageController {
  constructor(private readonly service: SupportMessageService) {}

  @Post()
  async create(@Body() dto: CreateSupportMessageDto) {
    return this.service.create(dto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}
