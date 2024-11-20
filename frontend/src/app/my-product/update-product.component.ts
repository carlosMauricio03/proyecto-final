import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';  // Usamos 'Product' en lugar de 'Customer'
import { ProductService } from '../service/product.service';  // Usamos 'ProductService' en lugar de 'CustomerService'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  product: Product = new Product('', 0);  // Inicializamos con un nuevo objeto de tipo 'Product'

  constructor(
    private productService: ProductService,  // Usamos el servicio de productos
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();  // Cargamos los detalles del producto
  }

  // Cargar datos del producto por ID
  loadProduct(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data => {
        this.product = data;  // Asignamos los datos del producto al objeto
      },
      err => {
        console.error('Error al cargar el producto:', err);
      }
    );
  }

  // Guardar los cambios en el producto
  updateProduct(): void {
    this.productService.update(this.product.id, this.product).subscribe(
      () => {
        console.log('Producto actualizado correctamente');
        this.router.navigate(['/products']);  // Redirigimos a la lista de productos
      },
      err => {
        console.error('Error al actualizar el producto:', err);
      }
    );
  }
}