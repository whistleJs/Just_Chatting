import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';

import ChatHistoryRepository from '@/api/repository/chatHistory.repository';
import ChatHistory from '@/api/model/entity/ChatHistory.entity';
import { CreateRequest } from '@/api/model/request/chatHistory.request';
import { ChatHistoryResponse } from '@/api/model/response/chatHistory.response';

@Injectable()
export default class ChatHistoryService {
  constructor(
    @InjectRepository(ChatHistory)
    private readonly chatHistoryRepository: ChatHistoryRepository,
  ) {}

  async create({
    user,
    message,
  }: CreateRequest): Promise<DeepPartial<ChatHistory>> {
    if (!user) return;

    return await this.chatHistoryRepository.save(
      { user, message },
      { transaction: true },
    );
  }

  async findAll(): Promise<ChatHistoryResponse[]> {
    return (
      await this.chatHistoryRepository.find({
        relations: { user: true },
        order: { createdAt: 'DESC' },
        take: 50,
        skip: 0,
      })
    )
      .map(({ id, message, createdAt, user }) => {
        const result: ChatHistoryResponse = {
          id,
          message,
          createdAt,
          user: null,
        };

        if (user) {
          result.user = {
            id: user.id,
            name: user.name,
            nickname: user.nickname,
          };
        }

        return result;
      })
      .reverse();
  }
}
