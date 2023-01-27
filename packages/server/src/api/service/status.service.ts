import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import StatusRepository from '@/api/repository/status.repository';
import Status from '@/api/model/entity/Status.entity';

@Injectable()
export default class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: StatusRepository,
  ) {}
}
