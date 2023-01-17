import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoomType } from '../enum/Room.enum';

import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class Rooms extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { unique: true, nullable: false })
  roomId: string;

  @Column('int', { nullable: false })
  type: RoomType;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar')
  password: string;

  @Column('int', { nullable: false })
  maximum: number;

  @ManyToOne(() => Users)
  @Column('int', { name: 'user_id', nullable: false })
  user: Users;
}

export default Rooms;
