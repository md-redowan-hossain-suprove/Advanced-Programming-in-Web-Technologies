import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Res,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Response } from 'express';
import { join } from 'path';
import { Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Patch(':id/status')
  async updateUserStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateStatusDto,
  ) {
    return this.userService.updateStatus(id, updateDto);
  }

  @Delete(':id')
async deleteUser(@Param('id', ParseIntPipe) id: number) {
  return this.userService.deleteUser(id);
}

  @Get(':id/cv')
  async getUserCv(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const cvPath = await this.userService.findCvFilePath(id);
    const fullPath = join(__dirname, '..', '..', 'uploads', cvPath);
    try {
      return res.sendFile(fullPath);
    } catch (error) {
      throw new NotFoundException('CV file not found');
    }
  }
}