import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-carro.component.html',
  styleUrls: ['./create-carro.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  lastName!: string;
  email!: string;
  phone!: string;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const customer = new Customer(this.lastName, this.email, this.phone);
    this.customerService.create(customer).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
}