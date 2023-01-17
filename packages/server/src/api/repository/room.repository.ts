import { Repository } from 'typeorm';

import Rooms from '@/api/model/entity/Room.entity';

export default class RoomRepository extends Repository<Rooms> {}
