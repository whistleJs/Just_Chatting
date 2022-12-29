import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserController from '@/controller/user.controller';
import UserService from '@/service/user.service';
import Users from '@/model/entity/Users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
