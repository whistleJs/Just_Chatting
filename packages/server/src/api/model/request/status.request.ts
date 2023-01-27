import Users from '../entity/Users.entity';

export interface UpdateRequest {
  user: Users;
  isOnline: boolean;
}
