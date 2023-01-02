import { IsRequired } from '@/validator/common.validator';

export class SignUpRequest {
  email: string;
  password: string;
  name: string;
}

export class SignInRequest {
  @IsRequired()
  email: string;
  password: string;
}
