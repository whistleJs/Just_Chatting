import { ChatHistoryType } from '@/api/model/enum/ChatHistory.enum';

export interface ChatHistoryUserResponse {
  id: number;
  nickname: string;
  name: string;
}

export interface ChatHistoryResponse {
  id: number;
  message: string;
  type: ChatHistoryType;
  createdAt: Date;
  user: ChatHistoryUserResponse | null;
}
