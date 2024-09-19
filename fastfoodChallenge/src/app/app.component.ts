import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "../point-of-sell/point-of-sell.component";
import { Order } from './order';
import { OrderService } from '../order.service';
import { OrdersEnteredComponent } from "../orders-entered/orders-entered.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { ReadyOrdersComponent } from "../ready-orders/ready-orders.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, PointOfSellComponent, OrdersEnteredComponent, KitchenComponent, ReadyOrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfoodChallenge';

  orders: Order[] = []; // Lista para almacenar las órdenes
 
  readyOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders(); // Inicializa la lista de órdenes
  }

  handleOrderSubmitted(order: Order) {
    // Aquí puedes manejar la lógica cuando se recibe el evento
    this.orderService.addOrder(order); // Añadir la nueva orden al servicio

    console.log('Llega la orden al padre', order);

    console.log("Ordenes", this.orders)
  }


  handleReadyOrder(order: Order){
    this.readyOrders.push(order);
    alert("TEST");
  }

}
