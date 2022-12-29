import { Repository } from 'typeorm';

import Users from '@/model/entity/Users.entity';

export default class UserRepository extends Repository<Users> {}
