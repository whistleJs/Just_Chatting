export interface JwtPayload {
  sub: number;
  email: string;
}

export interface JwtVerify {
  sub: number;
  email: string;
  iat: number;
  exp: number;
}
