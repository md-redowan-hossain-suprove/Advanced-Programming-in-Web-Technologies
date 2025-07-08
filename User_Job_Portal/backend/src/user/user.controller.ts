import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { decode } from 'punycode';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findByEmail(@Query('email') email: string) {
    console.log(decodeURI(email))
    return this.userService.findByEmail(decodeURI(email))
  }
}
