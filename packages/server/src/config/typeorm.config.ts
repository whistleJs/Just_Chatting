import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import Users from '@/model/entity/Users.entity';

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '0000',
  database: 'just_chatting',
  entities: [Users],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default TypeOrmModule.forRoot(options);
