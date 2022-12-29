import { Module } from '@nestjs/common';

import TypeOrmConfig from '@/config/typeorm.config';

import SocketGateway from '@/gateway/socket.gateway';

import UserModule from '@/api/module/user.module';

@Module({
  imports: [TypeOrmConfig, UserModule],
  controllers: [],
  providers: [SocketGateway],
})
export class AppModule {}
