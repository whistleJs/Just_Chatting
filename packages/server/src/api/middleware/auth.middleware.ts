import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

import { JwtVerify } from '@/api/model/jwt.model';

import UserService from '@/api/service/user.service';

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async use(request: Request, _: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new UnauthorizedException('NOT_EXISTS_TOKEN');
    }

    const [, token] = authorization.split(' ');
    let verifyToken = null;

    try {
      verifyToken = await this.jwtService.verify<JwtVerify>(token, {
        secret: 'secret',
      });
    } catch (e) {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    if (!verifyToken) {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    const user = await this.userService.findById(verifyToken.id);

    if (!user) {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    request.headers.user = user as any;

    next();
  }
}
