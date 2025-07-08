import { Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Admin } from './admin.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService: JwtService,  // Inject JwtService here
  ) {}

  async onModuleInit() {
    const adminExists = await this.adminRepository.findOneBy({ email: 'admin03@gmail.com' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('Admin1234', 10);
      const admin = this.adminRepository.create({
        email: 'admin03@gmail.com',
        password: hashedPassword,
      });
      await this.adminRepository.save(admin);
      console.log('Default admin created with email: admin03@gmail.com and password: Admin1234');
    }
  }

  async validateAdmin(email: string, password: string): Promise<Admin> {
    const admin = await this.adminRepository.findOneBy({ email });
    if (!admin) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    return admin;
  }

  async login(admin: Admin) {
    const payload = { email: admin.email, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
