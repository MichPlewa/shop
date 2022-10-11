import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsDataService {
  constructor(
    private productRepository: ProductRepository,
    private tagRepository: TagRepository,
    private connection: Connection,
  ) {}

  private products: Array<Product> = [];
}
