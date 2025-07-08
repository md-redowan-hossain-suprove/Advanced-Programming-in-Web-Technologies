
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() loginDto: LoginAdminDto) {
    const admin = await this.adminService.validateAdmin(loginDto.email, loginDto.password);
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.adminService.login(admin);
  }
}
