import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-pedido',
  templateUrl: './all-pedido.component.html',
  styleUrls: ['./all-pedido.component.css'],
})
export class AllPedidoComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit() {
    this.loadCustomers();
  }

  // Cargar lista de clientes
  loadCustomers() {
    this.customerService.findAll().subscribe(
      data => {
        this.customers = data;
      },
      err => {
        console.error('Error al cargar los clientes:', err);
      }
    );
  }

  // Eliminar cliente
  deleteCustomer(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.customerService.delete(id).subscribe(
        () => {
          console.log(`Cliente con id ${id} eliminado correctamente`);
          this.loadCustomers(); // Recargar lista tras eliminar
        },
        err => {
          console.error('Error al eliminar el cliente:', err);
        }
      );
    }
  }
}