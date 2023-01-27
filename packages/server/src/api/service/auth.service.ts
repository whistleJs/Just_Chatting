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
import Status from '@/api/model/entity/Status.entity';
import StatusRepository from '@/api/repository/status.repository';

@Injectable()
export default class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Users) private readonly userRepository: UserRepository,
    @InjectRepository(Status)
    private readonly statusRepository: StatusRepository,
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
      throw new BadRequestException('ALREADY_EMAIL');
    }

    // 닉네임 중복 체크
    if (
      await this.userRepository.findOne({
        where: { nickname: request.nickname },
      })
    ) {
      throw new BadRequestException('ALREADY_NICKNAME');
    }

    // 비밀번호 암호화
    request.password = await bcrypt.hash(request.password, 8);

    try {
      // 신규 유저 생성
      user = await this.userRepository.save(request);

      // 유저 접속 상태 생성
      await this.statusRepository.save({ user });
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new BadRequestException(e.message);
      } else {
        throw new InternalServerErrorException(e);
      }
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      nickname: user.nickname,
    };
  }

  /**
   * 로그인 절차
   */
  async signIn({ email, password }: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('NOT_FOUND_USER');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('INCORRECT_PASSWORD');
    }

    const accessToken = this.jwtService.sign({ email, sub: user.id });

    return { accessToken };
  }
}
