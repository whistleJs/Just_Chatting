import { Body, Controller, Post } from '@nestjs/common';

import AuthService from '@/api/service/auth.service';
import { LoginRequest, SignUpRequest } from '@/api/model/request/auth.request';

@Controller()
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() request: SignUpRequest) {
    return this.authService.signUp(request);
  }

  @Post('login')
  login(@Body() request: LoginRequest) {
    return this.authService.login(request);
  }
}
