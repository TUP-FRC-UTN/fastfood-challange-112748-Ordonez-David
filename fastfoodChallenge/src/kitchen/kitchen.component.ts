import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../app/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  @Input() orders: Order[] = []; // Lista de órdenes recibida desde el componente padre

  @Output() readyOder: EventEmitter<Order> = new EventEmitter<Order>();


  cookingOrder: Order | null = null; // Pedido en cocción


  startCooking(order: Order): void {
    if (!this.cookingOrder) {
      order.isCooking = true; // Marcar el pedido como en cocción
      this.cookingOrder = order; // Asignar el pedido en cocción
      this.orders = this.orders.filter(o => o !== order); // Remover el pedido de la lista
    } else {
      alert('Ya hay un pedido en cocción. Espera a que termine.');
    }
  }


   // Método para finalizar la cocción
   finishCooking(): void {
    if (this.cookingOrder) {
      this.cookingOrder.isCooking = false; // Desmarcar como cocinado
      this.readyOder.emit(this.cookingOrder); // Emitir el evento con el objeto order

      this.cookingOrder = null; // Finalizar el pedido en cocción
    }
  }
  
}
