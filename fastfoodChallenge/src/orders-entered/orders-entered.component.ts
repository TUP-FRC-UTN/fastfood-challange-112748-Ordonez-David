import { Component, Input } from '@angular/core';
import { Order } from '../app/order';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-entered',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-entered.component.html',
  styleUrl: './orders-entered.component.css'
})
export class OrdersEnteredComponent {

  @Input() orders: Order[] = []; // Recibir la lista de órdenes desde el componente padre



}
