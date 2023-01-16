import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoomType } from '../enum/Room.enum';

import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class Rooms extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('string', { unique: true, nullable: false })
  uuid: string;

  @Column('number', { nullable: false })
  type: RoomType;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar')
  password: string;

  @Column('number', { nullable: false })
  maximum: number;

  @ManyToOne(() => Users)
  @Column({ name: '', nullable: false })
  user: Users;
}

export default Rooms;
