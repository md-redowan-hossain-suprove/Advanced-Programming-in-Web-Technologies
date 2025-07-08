import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { ComplaintService } from './complaint.service';

@Controller('complaints')
export class ComplaintController {
  constructor(private complaintService: ComplaintService) {}

  @Get()
  findAll() {
    return this.complaintService.findAll();
  }

  @Patch(':id/reply')
  replyToComplaint(
    @Param('id') id: string,
    @Body('reply') reply: string,
  ) {
    return this.complaintService.replyToComplaint(+id, reply);
  }
}
