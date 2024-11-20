import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Librerías para trabajar con formularios
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// SweetAlert2 para las alertas
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Toastr para notificaciones
import { ToastrModule } from 'ngx-toastr';
//Componentes

import { MenuComponent } from './menu/menu.component';
import { AllPedidoComponent } from './my-customer/all-pedido.component';
import { UpdateCarroComponent } from './my-customer/update-carro.component';
import { DetailCarroComponent } from './my-customer/detail-carro.component';
import { CreateCustomerComponent } from './my-customer/create-carro.component';

//Products
import { AllProductComponent } from './my-product/all-product.component';
import { CreateProductComponent } from './my-product/create-product.component';
import { UpdateProductComponent } from './my-product/update-product.component';
import { DetailProductComponent } from './my-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AllPedidoComponent,
    CreateCustomerComponent,
    UpdateCarroComponent,
    DetailCarroComponent,
    AllProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}