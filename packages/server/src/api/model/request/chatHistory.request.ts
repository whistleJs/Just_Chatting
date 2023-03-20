import Users from '@/api/model/entity/Users.entity';
import { ChatHistoryType } from '@/api/model/enum/ChatHistory.enum';

export interface CreateRequest {
  user: Users;
  message: string;
  type: ChatHistoryType;
}
