import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class ChatHistory extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('text', { nullable: false })
  message: string;

  @ManyToOne(() => Users, { cascade: true })
  @JoinColumn()
  user: Users;
}

export default ChatHistory;
