// src/company/company.controller.ts
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Post()
  async createCompany(@Body() companyData: Partial<Company>): Promise<Company> {
    return this.companyService.create(companyData);
  }

  @Delete(':id')
  async deleteCompany(@Param('id', ParseIntPipe) id: number) {
    return this.companyService.delete(id);
  }
}
