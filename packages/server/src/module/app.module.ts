import { Module } from '@nestjs/common';
import { AppController } from '@/controller/app.controller';
import { AppService } from '@/service/app.service';
import { SocketGateway } from '@/gateway/socket.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
