import {
  BadRequestException,
  InternalServerErrorException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError } from 'typeorm';

import StatusRepository from '@/api/repository/status.repository';
import Status from '@/api/model/entity/Status.entity';
import { UpdateRequest } from '@/api/model/request/status.request';
import Users from '@/api/model/entity/Users.entity';

@Injectable()
export default class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: StatusRepository,
  ) {}

  async findByUser(user: Users) {
    try {
      return this.statusRepository.findOne({
        where: { user: { id: user.id } },
      });
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new BadRequestException(e.message);
      } else {
        throw new InternalServerErrorException(e);
      }
    }
  }

  async updateByUserId({ user, isOnline }: UpdateRequest) {
    const status: Status = await this.findByUser(user);

    if (status === null) return false;

    try {
      await this.statusRepository.save({ ...status, isOnline });
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new BadRequestException(e.message);
      } else {
        throw new InternalServerErrorException(e);
      }
    }

    return true;
  }
}
