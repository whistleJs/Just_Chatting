import {
  BadRequestException,
  InternalServerErrorException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { QueryFailedError } from 'typeorm';

import UserRepository from '@/api/repository/user.repository';
import Users from '@/api/model/entity/Users.entity';
import { SignUpRequest, SignInRequest } from '@/api/model/request/auth.request';
import {
  SignUpResponse,
  SignInResponse,
} from '@/api/model/response/auth.response';

@Injectable()
export default class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users) private readonly userRepository: UserRepository,
  ) {}

  /**
   * 회원가입 절차
   */
  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    let user: Users = null;

    // 이메일 중복 체크
    if (
      await this.userRepository.findOne({ where: { email: request.email } })
    ) {
      throw new BadRequestException('Already email exists.');
    }

    // 비밀번호 암호화
    request.password = await bcrypt.hash(request.password, 8);

    try {
      user = await this.userRepository.save(request);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new BadRequestException(e.message);
      } else {
        throw new InternalServerErrorException(e);
      }
    }

    return { id: user.id, email: user.email, name: user.name };
  }

  /**
   * 로그인 절차
   */
  async signIn({ email, password }: SignInRequest): Promise<SignInResponse> {
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
