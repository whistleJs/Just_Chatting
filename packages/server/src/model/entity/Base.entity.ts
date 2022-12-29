import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

class BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export default BaseEntity;
