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

export interface AuthSignUpResponse {
  email: string;
  id: number;
  name: string;
  nickname: string;
}

export interface AuthSignInResponse {
  accessToken: string;
}
