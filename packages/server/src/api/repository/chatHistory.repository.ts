import { Repository } from 'typeorm';

import ChatHistory from '@/api/model/entity/ChatHistory.entity';

export default class ChatHistoryRepository extends Repository<ChatHistory> {}
