import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { extname } from 'path';

@Controller('application')
@UsePipes(ValidationPipe)
export class ApplicationController {
  constructor(private readonly appService: ApplicationService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('cv', {
      storage: diskStorage({
        destination: './uploads/cv',
        filename: (req, file, cb) => {
          const fileExtName = extname(file.originalname).toLowerCase();
          const allowedExt = ['.pdf'];
          if (!allowedExt.includes(fileExtName)) {
            const error = new BadRequestException('Only .pdf files are allowed');
            return cb(error as any, '');
          }
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
          cb(new BadRequestException('Only PDF files are allowed') as any, false);
        } else {
          cb(null, true);
        }
      },
    })
  )
  async applyJob(
    @Body() dto: CreateApplicationDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) {
      throw new BadRequestException('CV file is required and must be a .pdf');
    }
    return this.appService.create(dto, file.filename);
  }

  @Get()
  getAllApplications() {
    return this.appService.findAll();
  }
}