import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class Status extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('boolean', { default: false, nullable: false })
  isOnline: boolean;

  @ManyToOne(() => Users)
  @Column('int', { name: 'user_id', nullable: false })
  user: Users;
}

export default Status;
