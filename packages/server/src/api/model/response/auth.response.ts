export interface SignUpResponse {
  id: number;
  email: string;
  name: string;
}

export interface SignInResponse {
  accessToken: string;
}
