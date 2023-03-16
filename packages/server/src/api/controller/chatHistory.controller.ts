import { Controller, Get } from '@nestjs/common';

import ChatHistoryService from '@/api/service/chatHistory.service';

@Controller('chat-history')
export default class ChatHistoryController {
  constructor(private readonly chatHistory: ChatHistoryService) {}

  @Get()
  signUp() {
    return this.chatHistory.findAll();
  }
}
