import { Controller, Get } from '@nestjs/common';

import UserService from '@/api/service/user.service';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('count')
  getCount() {
    return this.userService.getCount();
  }
}
