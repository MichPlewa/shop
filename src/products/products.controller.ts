import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsDataService } from './products-data.service';
import { ExternalProductDto } from './dto/external-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './db/products.entity';
import { ProductsQuery } from './queries/ProductsQuery.interface';
import { dateToArray } from '../shared/helper/date.helper';

@Controller('products')
export class ProductsController {
  constructor(private productRepository: ProductsDataService) {}

  @Get(':id')
  async getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalProductDto> {
    return this.mapProductToExternal(
      await this.productRepository.getProductById(id),
    );
  }

  @Get()
  async getAllProducts(
    @Query() query: ProductsQuery,
  ): Promise<Array<ExternalProductDto>> {
    return (await this.productRepository.getAllProducts(query)).map((product) =>
      this.mapProductToExternal(product),
    );
  }

  @Post()
  async addProduct(
    @Body() item: CreateProductDTO,
  ): Promise<ExternalProductDto> {
    const product = await this.productRepository.addProduct(item);
    return this.mapProductToExternal(product);
  }

  mapProductToExternal(product: Product): ExternalProductDto {
    return {
      ...product,
      createdAt: dateToArray(product.createdAt),
      updatedAt: dateToArray(product.updatedAt),
      tags: product.tags.map((i) => i.name),
    };
  }
}
