import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private orderRepository: OrdersRepository) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  async getOrders() {
    return this.orderRepository.find();
  }
}
