export interface AuthSignUpRequest {
  email: string;
  nickname: string;
  password: string;
  name: string;
}

export interface AuthSignInRequest {
  email: string;
  password: string;
}
