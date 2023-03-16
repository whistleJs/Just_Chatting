import Users from '@/api/model/entity/Users.entity';

export interface CreateRequest {
  user: Users;
  message: string;
}
