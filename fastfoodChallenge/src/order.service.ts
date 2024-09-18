import { Injectable } from '@angular/core';
import { Order } from './app/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private orders: Order[] = []; // Lista privada para almacenar órdenes

  constructor() { }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }

}
