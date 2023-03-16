import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';

import TypeOrmConfig from '@/config/typeorm.config';
import SocketGateway from '@/gateway/socket.gateway';
import AuthMiddleware from '@/api/middleware/auth.middleware';

import UserController from '@/api/controller/user.controller';

import Chat from '@/api/model/entity/ChatHistory.entity';
import Status from '@/api/model/entity/Status.entity';
import Users from '@/api/model/entity/Users.entity';

import ChatService from '@/api/service/chatHistory.service';
import StatusService from '@/api/service/status.service';
import UserService from '@/api/service/user.service';

import AuthModule from '@/api/module/auth.module';
import ChatHistoryModule from '@/api/module/chatHistory.module';
import UserModule from '@/api/module/user.module';

@Module({
  imports: [
    TypeOrmConfig,
    TypeOrmModule.forFeature([Chat, Status, Users]),
    ScheduleModule.forRoot(),
    AuthModule,
    ChatHistoryModule,
    UserModule,
  ],
  providers: [
    JwtService,
    ChatService,
    StatusService,
    UserService,
    SocketGateway,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UserController);
  }
}
