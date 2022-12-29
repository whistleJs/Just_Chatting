import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import UserRepository from '@/api/repository/user.repository';
import Users from '@/api/model/entity/Users.entity';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: UserRepository,
  ) {}

  async getCount() {
    return this.userRepository.count();
  }
}
