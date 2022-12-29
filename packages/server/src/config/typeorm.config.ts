import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '0000',
  database: 'just_chatting',
  entities: [__dirname + '/../model/entity/*.entity.{ts,js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default TypeOrmModule.forRoot(options);
