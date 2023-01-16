import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import BaseEntity from './Base.entity';

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { nullable: false, unique: true })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false, unique: true })
  nickname: string;
}

export default Users;
