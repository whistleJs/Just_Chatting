import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io';

import { JwtVerify } from '@/api/model/jwt.model';
import UserService from '@/api/service/user.service';

@Injectable()
export class SocketGaurd implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const [socket]: [Socket] = context.getArgs();
    const { token } = socket.handshake.auth;

    if (!token) return false;

    try {
      const { sub } = this.jwtService.decode(token) as JwtVerify;

      return new Promise((res, rej) => {
        return this.userService.findById(sub).then((user) => {
          if (user) {
            res(true);
          }

          rej(`Users not found: ${sub}`);
        });
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
