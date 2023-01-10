import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import BaseEntity from './Base.entity';

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  name: string;

  @Column('varchar', { unique: true })
  nickname: string;
}

export default Users;
