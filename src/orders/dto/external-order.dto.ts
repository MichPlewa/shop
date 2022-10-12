import { State } from '../enums/orders.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../db/orderTag.entity';

export class ExternalOrderDTO {
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
  productId?: string;
  userAddressId?: string;
}
