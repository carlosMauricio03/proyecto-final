export class Product {
  id!: number;
  name!: string;
  description?: string;
  price!: number;
  discountPercentage?: number;  // Este campo puede ser opcional si no siempre se usa
  discountedPrice?: number;  // Este campo no se almacena en la base de datos, es solo para mostrar el precio con descuento

  constructor(
    name: string,
    price: number,
    description?: string,
    discountPercentage?: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.discountPercentage = discountPercentage;
  }
}