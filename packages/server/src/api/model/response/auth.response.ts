export interface SignUpResponse {
  id: number;
  email: string;
  name: string;
  nickname: string;
}

export interface SignInResponse {
  accessToken: string;
}
