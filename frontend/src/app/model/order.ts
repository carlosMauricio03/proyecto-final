import { Product } from './product';
import { Customer } from './customer';

export class Order {
  id!: number;
  orderDate!: string;
  status!: string;
  totalAmount!: number;
  customer!: Customer;
  products!: Product[];

  constructor(orderDate: string, status: string, totalAmount: number, customer: Customer, products: Product[]) {
    this.orderDate = orderDate;
    this.status = status;
    this.totalAmount = totalAmount;
    this.customer = customer;
    this.products = products;
  }
}