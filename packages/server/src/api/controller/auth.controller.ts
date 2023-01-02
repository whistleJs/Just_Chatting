import { Body, Controller, Post } from '@nestjs/common';

import AuthService from '@/api/service/auth.service';
import { SignUpRequest, SignInRequest } from '@/api/model/request/auth.request';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() request: SignUpRequest) {
    return this.authService.signUp(request);
  }

  @Post('sign-in')
  signIn(@Body() request: SignInRequest) {
    return this.authService.signIn(request);
  }
}
