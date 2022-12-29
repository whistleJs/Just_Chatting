import { Controller, Get, Headers } from '@nestjs/common';

import UserService from '@/api/service/user.service';
import Users from '@/api/model/entity/Users.entity';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('count')
  getCount(@Headers('user') requestUser: Users) {
    console.log(requestUser, 'asdf');
    return this.userService.getCount();
  }
}
