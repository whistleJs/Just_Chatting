export interface SignUpResponse {
  id: number;
  email: string;
  name: string;
}

export interface LoginResponse {
  accessToken: string;
}
