import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ChatHistoryType } from '../enum/ChatHistory.enum';
import BaseEntity from './Base.entity';
import Users from './Users.entity';

@Entity()
class ChatHistory extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('enum', { enum: ChatHistoryType, default: 'TEXT' })
  type: ChatHistoryType;

  @Column('longtext', { nullable: false })
  message: string;

  @ManyToOne(() => Users, { cascade: true })
  @JoinColumn()
  user: Users;
}

export default ChatHistory;
