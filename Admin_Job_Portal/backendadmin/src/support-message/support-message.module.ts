import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportMessage } from './support-message.entity';
import { SupportMessageService } from './support-message.service';
import { SupportMessageController } from './support-message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SupportMessage])],
  controllers: [SupportMessageController],
  providers: [SupportMessageService],
})
export class SupportMessageModule {}
