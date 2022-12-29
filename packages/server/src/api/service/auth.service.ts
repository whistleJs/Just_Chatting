import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import UserRepository from '@/api/repository/user.repository';
import Users from '@/api/model/entity/Users.entity';
import { LoginRequest } from '@/api/model/request/auth.request';
import { LoginResponse } from '@/api/model/response/auth.response';

@Injectable()
export default class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users) private readonly userRepository: UserRepository,
  ) {}

  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('Not found user.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Incorrect password.');
    }

    const accessToken = this.jwtService.sign({ email, sub: user.id });

    return { accessToken };
  }
}
