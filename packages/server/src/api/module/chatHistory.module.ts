import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ChatHistoryController from '@/api/controller/chatHistory.controller';
import ChatHistoryService from '@/api/service/chatHistory.service';
import ChatHistory from '@/api/model/entity/ChatHistory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatHistory])],
  controllers: [ChatHistoryController],
  providers: [ChatHistoryService],
})
export default class ChatHistoryModule {}
