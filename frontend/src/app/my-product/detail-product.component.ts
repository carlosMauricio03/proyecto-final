import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'; // Asegúrate de tener este servicio
import { Product } from '../model/product';  // Asegúrate de importar el modelo correcto
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  @Input() id!: string; // Recibe el ID como input
  product!: Product; // Cambié a tipo 'Product' en lugar de 'Customer'

  constructor(
    private productService: ProductService,  // Cambié a 'ProductService'
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProduct();  // Cambié el nombre del método a 'getProduct'
  }

  getProduct(): void {
    const id = this.activatedRoute.snapshot.params['id'];  // Obtiene el ID del producto
    this.productService.detail(id).subscribe(
      data => {
        this.product = data;  // Asigna los datos del producto
      },
      err => {
        // Aquí puedes agregar un manejo de errores si lo necesitas
      }
    );
  }
}