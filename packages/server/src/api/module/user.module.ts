import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserController from '@/api/controller/user.controller';
import UserService from '@/api/service/user.service';
import Users from '@/api/model/entity/Users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
