// src/company/company.service.ts
import { Injectable, OnModuleInit, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService implements OnModuleInit {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
  ) {}

  async onModuleInit() {
    const count = await this.companyRepo.count();
    if (count === 0) {
      const defaultCompanies = [
        {
          name: 'InnovateX Solutions',
          address: '45/A New Market, Chattogram',
          email: 'info@innovatex.com',
          contactNumber: '01700000000',
        },
        {
          name: 'DigitalWave',
          address: '12/4 Banani, Dhaka',
          email: 'hello@digitalwave.com',
          contactNumber: '01900000000',
        },
        {
          name: 'TechSoft Ltd.',
          address: '123 Main Road, Dhaka',
          email: 'contact@techsoft.com',
          contactNumber: '01800000000',
        },
        
        
      ];

      for (const company of defaultCompanies) {
        const newCompany = this.companyRepo.create(company);
        await this.companyRepo.save(newCompany);
      }

      console.log('✅ Default companies inserted.');
    }
  }

  findAll(): Promise<Company[]> {
    return this.companyRepo.find();
  }

  create(companyData: Partial<Company>): Promise<Company> {
    const newCompany = this.companyRepo.create(companyData);
    return this.companyRepo.save(newCompany);
  }

  async delete(id: number): Promise<boolean> {
    const company = await this.companyRepo.findOne({ where: { id } });
    if (!company) return false;
    await this.companyRepo.remove(company);
    return true;
  }
}
