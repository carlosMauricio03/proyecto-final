import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-carro',
  templateUrl: './detail-carro.component.html',
  styleUrls: ['./detail-carro.component.css'],
})
export class DetailCarroComponent  implements OnInit {
  @Input() id!: string; // Recibe el ID como input
  customer!: Customer;

  constructor(
    private customerService: CustomerService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.customerService.detail(id).subscribe(
      data => {
        this.customer = data;
      },
      err => {

      }
    );
  }
}
