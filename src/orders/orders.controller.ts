import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  ParseUUIDPipe,
  Put,
  Get,
  Patch,
} from '@nestjs/common';
import { OrdersDataService } from './orders-data.service';
import { CreateOrderDTO, CreateOrderProductDto } from './dto/create-order.dto';
import { ExternalOrderDTO } from './dto/external-order.dto';
import { Order } from './db/orders.entity';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private orderRepository: OrdersDataService) {}

  @Get(':id')
  async getOrderById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalOrderDTO> {
    return this.mapOrderToExternal(await this.orderRepository.getOrderById(id));
  }

  @Get() async getOrders(): Promise<ExternalOrderDTO[]> {
    return (await this.orderRepository.getOrders()).map((order) =>
      this.mapOrderToExternal(order),
    );
  }

  @Post()
  async addOrder(@Body() _item_: CreateOrderDTO): Promise<ExternalOrderDTO> {
    return this.mapOrderToExternal(await this.orderRepository.addOrder(_item_));
  }

  private mapOrderToExternal(order: Order): ExternalOrderDTO {
    return {
      id: order.id,
      price: order.price,
      description: order.description,
      state: order.state,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      address: order.address,
    };
  }

  @Put(':id')
  async updateOrder(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() _item_: UpdateOrderDTO,
  ): Promise<ExternalOrderDTO> {
    return this.mapOrderToExternal(
      await this.orderRepository.updateOrder(id, _item_),
    );
  }

  @Patch(':id/products')
  async addProductToOrder(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() createOrderProductsDto: CreateOrderProductDto,
  ): Promise<ExternalOrderDTO> {
    return this.mapOrderToExternal(
      await this.orderRepository.addProductToOrder(id, createOrderProductsDto),
    );
  }

  @Delete(':id')
  async deleteOrder(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<void> {
    return this.orderRepository.deleteOrder(id);
  }

  @Delete(':id/products/:idOrderProduct')
  async deleteProductFromOrder(
    id: string,
    order: UpdateOrderDTO,
  ): Promise<Order> {
    return this.orderRepository.deleteProductFromOrder(id, order);
  }
}
