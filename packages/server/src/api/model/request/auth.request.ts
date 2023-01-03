import { IsRequired, IsDataType } from '@/validator/common.validator';

export class SignUpRequest {
  @IsDataType('STRING')
  @IsRequired
  email: string;

  @IsDataType('STRING')
  @IsRequired
  password: string;

  @IsDataType('STRING')
  @IsRequired
  name: string;
}

export class SignInRequest {
  @IsDataType('STRING')
  @IsRequired
  email: string;

  @IsDataType('STRING')
  @IsRequired
  password: string;
}
