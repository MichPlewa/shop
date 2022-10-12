import { State } from '../enums/orders.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../db/orderTag.entity';
import { OrderedProducts } from '../db/orderedProducts.entity';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsEnum(State)
  state: Tag[];
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @IsString()
  address: string;
  @IsNotEmpty()
  orderItems: OrderedProducts[];
}

export class CreateOrderProductDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @IsNotEmpty()
  product: string;
  @IsNotEmpty()
  orderId: string;
}
