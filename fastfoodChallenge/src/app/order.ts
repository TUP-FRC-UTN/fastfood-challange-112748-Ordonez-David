export class Order {

    number: number =  Math.floor(Math.random() * 1000) + 1; // Numero de pedido random de 1 a 1000
    name: string = "";  // Nombre del cliente
    description: string = "";  // Descripción del pedido
    date: Date = new Date() // Fecha de creación del pedido
    isCooking: boolean = false; // Nuevo campo para saber si está cocinando

}
