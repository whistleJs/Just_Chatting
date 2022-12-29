import { Module } from '@nestjs/common';

import TypeOrmConfig from '@/config/typeorm.config';

import { AppController } from '@/controller/app.controller';
import { SocketGateway } from '@/gateway/socket.gateway';
import { AppService } from '@/service/app.service';

@Module({
  imports: [TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
