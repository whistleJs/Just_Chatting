export interface ChatHistoryUserResponse {
  id: number;
  nickname: string;
  name: string;
}

export interface ChatHistoryResponse {
  id: number;
  message: string;
  createdAt: Date;
  user: ChatHistoryUserResponse | null;
}
