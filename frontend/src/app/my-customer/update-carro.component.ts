import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-update-carro',
  templateUrl: './update-carro.component.html',
  styleUrls: ['./update-carro.component.css'],
})
export class UpdateCarroComponent implements OnInit {
  customer: Customer = new Customer('', '', '');

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomer();
  }

  // Cargar datos del cliente por ID
  loadCustomer(): void {
    const id = this.route.snapshot.params['id'];
    this.customerService.detail(id).subscribe(
      data => {
        this.customer = data;
      },
      err => {
        console.error('Error al cargar el cliente:', err);
      }
    );
  }

  // Guardar los cambios
  updateCustomer(): void {
    this.customerService.update(this.customer.id, this.customer).subscribe(
      () => {
        console.log('Cliente actualizado correctamente');
        this.router.navigate(['/customers']);
      },
      err => {
        console.error('Error al actualizar el cliente:', err);
      }
    );
  }
}