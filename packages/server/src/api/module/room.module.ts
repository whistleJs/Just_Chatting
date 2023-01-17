import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RoomController from '@/api/controller/room.controller';
import RoomService from '@/api/service/room.service';
import Rooms from '@/api/model/entity/Room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rooms])],
  controllers: [RoomController],
  providers: [RoomService],
})
export default class RoomModule {}
