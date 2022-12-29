import { Repository } from 'typeorm';

import Users from '@/api/model/entity/Users.entity';

export default class UserRepository extends Repository<Users> {}
