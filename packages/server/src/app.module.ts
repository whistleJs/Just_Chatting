import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import TypeOrmConfig from '@/config/typeorm.config';

import SocketGateway from '@/gateway/socket.gateway';

import AuthMiddleware from './api/middleware/auth.middleware';

import AuthModule from '@/api/module/auth.module';
import UserModule from '@/api/module/user.module';
import UserService from '@/api/service/user.service';
import Users from '@/api/model/entity/Users.entity';

@Module({
  imports: [
    TypeOrmConfig,
    TypeOrmModule.forFeature([Users]),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [JwtService, UserService, SocketGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'sign-in', method: RequestMethod.POST },
        { path: 'sign-up', method: RequestMethod.POST },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
