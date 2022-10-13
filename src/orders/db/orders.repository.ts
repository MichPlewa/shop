import { EntityRepository, Repository, In, DeleteResult } from 'typeorm';
import { Order } from './orders.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  deleteById(id: string): Promise<DeleteResult> {
    return this.delete({ id });
  }

  getOrderById(id: string[]): Promise<Order[]> {
    return this.find({
      where: {
        id: In(id),
      },
    });
  }
}
