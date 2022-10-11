import { Tags } from '../enums/tags.enum';

export interface Product {
  id: string;
  name: string;
  img: string;
  price: number;
  count: number;
  tags: Array<Tags>;
  createdAt: Date;
  updatedAt: Date;
}
