import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';  // Usamos 'Product' en lugar de 'Customer'
import { ProductService } from '../service/product.service';  // Usamos 'ProductService' en lugar de 'CustomerService'

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];  // Lista de productos

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();  // Cargamos los productos al iniciar
  }

  // Cargar lista de productos
  loadProducts() {
    this.productService.findAll().subscribe(
      data => {
        this.products = data;  // Asignamos los productos a la variable 'products'
      },
      err => {
        console.error('Error al cargar los productos:', err);
      }
    );
  }

  // Eliminar producto
  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.delete(id).subscribe(
        () => {
          console.log(`Producto con id ${id} eliminado correctamente`);
          this.loadProducts();  // Recargamos la lista después de eliminar el producto
        },
        err => {
          console.error('Error al eliminar el producto:', err);
        }
      );
    }
  }
}