import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';  // Cambiar el servicio a ProductService
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  name!: string;
  description?: string;
  price!: number;
  discountPercentage?: number;

  constructor(
    private productService: ProductService,  // Cambiar a ProductService
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    // Crear un objeto de tipo Product con los campos necesarios
    const product = new Product(this.name, this.price, this.description, this.discountPercentage);

    // Enviar el producto al servicio para crear el producto en el backend
    this.productService.create(product).subscribe(() => {
      // Redirigir al listado de productos después de crear el producto
      this.router.navigate(['/products']);
    });
  }
}