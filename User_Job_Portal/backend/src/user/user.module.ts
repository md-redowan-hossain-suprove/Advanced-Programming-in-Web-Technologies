import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
   imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: 'JWT_SECRET', signOptions: { expiresIn: '1d' } })
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
