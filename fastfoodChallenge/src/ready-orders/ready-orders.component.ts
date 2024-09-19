import { Component, Input } from '@angular/core';
import { Order } from '../app/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ready-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ready-orders.component.html',
  styleUrl: './ready-orders.component.css'
})
export class ReadyOrdersComponent {

  @Input() ordersReady: Order[] = []; // Recibir la lista de órdenes desde el componente padre


}
