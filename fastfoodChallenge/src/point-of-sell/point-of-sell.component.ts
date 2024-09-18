import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../app/order';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

order: Order = new Order();
@Output() orderSubmitted: EventEmitter<Order> = new EventEmitter<Order>();



sendForm(form: NgForm) {
  //TODO:
  
  if (form.valid) {
    // this.enviadoEmit.emit(this.prog);
  //  this.progService.addPush(this.prog);
  //   this.prog = new Programador();
  //   this.habilidadSeleccionada = '';
  var newOrder = new Order(); // Crea una nueva instancia de Order
      newOrder.name = this.order.name;
      newOrder.description = this.order.description

    this.orderSubmitted.emit(newOrder); // Emitir el evento con el objeto order


  }
}

}
