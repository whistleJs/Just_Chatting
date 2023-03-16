import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import ChatHistoryRepository from '@/api/repository/chatHistory.repository';
import ChatHistory from '@/api/model/entity/ChatHistory.entity';
import Users from '@/api/model/entity/Users.entity';

@Injectable()
export default class ChatHistoryService {
  constructor(
    @InjectRepository(ChatHistory)
    private readonly chatHistoryRepository: ChatHistoryRepository,
  ) {}

  async create({ user, message }: { user: Users; message: string }) {
    if (!user) return;

    return await this.chatHistoryRepository.save({ user, message });
  }
}
