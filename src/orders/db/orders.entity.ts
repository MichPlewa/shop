import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Tag } from './orderTag.entity';
import { OrderedProducts } from './orderedProducts.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(
    (type) => OrderedProducts,
    (orderedProducts) => orderedProducts.orderId,
  )
  @JoinTable({
    name: 'orderedProducts',
    joinColumn: {
      name: 'orderId',
    },
    inverseJoinColumn: {
      name: 'productId',
    },
  })
  orderItems: OrderedProducts[];

  @JoinTable({
    name: 'state',
    joinColumn: {
      name: 'orderId',
    },
    inverseJoinColumn: {
      name: 'tagId',
    },
  })
  state: Tag[];

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;
}
