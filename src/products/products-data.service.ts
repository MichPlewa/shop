import { Injectable } from '@nestjs/common';
import { ProductRepository } from './db/product.repository';
import { TagRepository } from './db/tag.repository';
import { Connection } from 'typeorm';
import { Product } from './db/products.entity';

@Injectable()
export class ProductsDataService {
  constructor(
    private productRepository: ProductRepository,
    private tagRepository: TagRepository,
    private connection: Connection,
  ) {}

  getProductById(id: string): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  private products: Array<Product> = [];
}
