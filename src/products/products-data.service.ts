import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { EntityManager } from 'typeorm';
import { ProductRepository } from './db/product.repository';
import { Product } from './db/products.entity';
import { Tag } from './db/tag.entity';
import { TagRepository } from './db/tag.repository';
import { ProductsQuery } from './queries/ProductsQuery.interface';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsDataService {
  constructor(
    private productRepository: ProductRepository,
    private tagRepository: TagRepository,
    private connection: Connection,
  ) {}

  async addProduct(item: CreateProductDTO): Promise<Product> {
    return this.connection.transaction(async (manager: EntityManager) => {
      const tags: Tag[] = await this.tagRepository.findTagsByName(item.tags);

      const productToSave = new Product();

      productToSave.name = item.name;
      productToSave.price = item.price;
      productToSave.tags = tags;
      productToSave.count = item.count;

      return await manager
        .getCustomRepository(ProductRepository)
        .save(productToSave);
    });
  }

  getProductById(id: string): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  getAllProducts(_query_: ProductsQuery): Promise<Product[]> {
    return this.productRepository.findAll(_query_);
  }

  private products: Array<Product> = [];
}
