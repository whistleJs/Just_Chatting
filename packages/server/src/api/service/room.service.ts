import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import Rooms from '@/api/model/entity/Room.entity';
import RoomRepository from '@/api/repository/room.repository';

@Injectable()
export default class RoomService {
  constructor(
    @InjectRepository(Rooms) private readonly roomRepository: RoomRepository,
  ) {}
}
