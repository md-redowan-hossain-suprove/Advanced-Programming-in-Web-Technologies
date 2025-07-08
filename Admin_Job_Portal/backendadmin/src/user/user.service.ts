import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.userRepo.count();
    if (count === 0) {
      const users = [
        this.userRepo.create({ name: 'John Doe', email: 'john@example.com' }),
        this.userRepo.create({ name: 'Jane Smith', email: 'jane@example.com' }),
        this.userRepo.create({ name: 'Rahim Uddin', email: 'rahim@example.com' }),
      ];
      await this.userRepo.save(users);
      console.log('✅ Default users created in the database.');
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async updateStatus(id: number, updateDto: UpdateStatusDto): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (updateDto.cvStatus) user.cvStatus = updateDto.cvStatus;
    if (updateDto.vivaStatus) user.vivaStatus = updateDto.vivaStatus;
    return this.userRepo.save(user);
  }

  async findCvFilePath(id: number): Promise<string> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!user.cvFilePath) {
      throw new NotFoundException('CV file not found');
    }
    return user.cvFilePath;
  }
  async deleteUser(id: number): Promise<{ message: string }> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    await this.userRepo.remove(user);
    return { message: 'User deleted successfully' };
  }

}
