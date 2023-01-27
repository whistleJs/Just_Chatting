import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import AuthController from '@/api/controller/auth.controller';
import AuthService from '@/api/service/auth.service';
import Users from '@/api/model/entity/Users.entity';
import Status from '@/api/model/entity/Status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status, Users]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1y',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export default class AuthModule {}
