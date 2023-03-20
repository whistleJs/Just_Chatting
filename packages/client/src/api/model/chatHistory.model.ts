export type ChatHistoryType = "TEXT" | "IMAGE";

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
