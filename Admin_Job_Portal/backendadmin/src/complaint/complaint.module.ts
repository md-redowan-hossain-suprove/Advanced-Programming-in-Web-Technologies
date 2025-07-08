import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintService } from './complaint.service';
import { ComplaintController } from './complaint.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Complaint])],
  providers: [ComplaintService],
  controllers: [ComplaintController],
})
export class ComplaintModule {}
