import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import { AllPedidoComponent } from './my-customer/all-pedido.component';
import { CreateCustomerComponent } from './my-customer/create-carro.component';
import { UpdateCarroComponent } from './my-customer/update-carro.component';
import { DetailCarroComponent } from './my-customer/detail-carro.component';

//Products
import { AllProductComponent } from './my-product/all-product.component';
import { CreateProductComponent } from './my-product/create-product.component';
import { UpdateProductComponent } from './my-product/update-product.component';
import { DetailProductComponent } from './my-product/detail-product.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'customers', component: AllPedidoComponent },
  { path: 'createCustomer', component: CreateCustomerComponent },
  { path: 'updateCustomer/:id', component: UpdateCarroComponent },
  { path: 'detailCustomer/:id', component: DetailCarroComponent },

  { path: 'products', component: AllProductComponent },
  { path: 'createProduct', component: CreateProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: 'detailProduct/:id', component: DetailProductComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }, // Redireccionar a la página de inicio si la ruta no coincide con ninguna de las definidas
];

@NgModule({
  imports: [
    // Configuración del enrutamiento con preloading de todos los módulos
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }