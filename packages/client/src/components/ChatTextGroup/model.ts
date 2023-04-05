import { ChatHistoryResponse, ChatHistoryUserResponse } from "@/api/model/chatHistory.model";

export interface ChatTextGroupData {
  user: ChatHistoryUserResponse | null;
  historyList: ChatHistoryResponse[];
}
