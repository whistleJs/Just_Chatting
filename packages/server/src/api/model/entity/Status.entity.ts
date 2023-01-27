import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class Status extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('boolean', { default: false, nullable: false })
  isOnline: boolean;

  @OneToOne(() => Users, { cascade: true })
  @JoinColumn()
  user: Users;
}

export default Status;
