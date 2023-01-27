import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import TypeOrmConfig from '@/config/typeorm.config';
import SocketGateway from '@/gateway/socket.gateway';
import AuthMiddleware from '@/api/middleware/auth.middleware';

import UserController from '@/api/controller/user.controller';

import Status from '@/api/model/entity/Status.entity';
import Users from '@/api/model/entity/Users.entity';

import StatusService from '@/api/service/status.service';
import UserService from '@/api/service/user.service';

import AuthModule from '@/api/module/auth.module';
import UserModule from '@/api/module/user.module';

@Module({
  imports: [
    TypeOrmConfig,
    TypeOrmModule.forFeature([Status, Users]),
    AuthModule,
    UserModule,
  ],
  providers: [JwtService, StatusService, UserService, SocketGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UserController);
  }
}
