export interface JwtPayload {
  sub: number;
  email: string;
}

export interface JwtVerify {
  id: number;
  email: string;
  iat: number;
  exp: number;
}
