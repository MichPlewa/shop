import {
  Entity,
  JoinColumn,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartEntity } from 'src/cart/cart.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column()
  topSale: boolean;

  @Column()
  image: string;

  @Column()
  starsRating: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany((type) => CartEntity, (cart) => cart.id)
  @JoinColumn()
  cart: CartEntity[];
}
