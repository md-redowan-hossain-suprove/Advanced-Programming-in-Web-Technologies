import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './notice.entity';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notice])],
  providers: [NoticeService],
  controllers: [NoticeController],
  exports: [NoticeService],
})
export class NoticeModule {}