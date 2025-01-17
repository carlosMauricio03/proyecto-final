import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productURL = environment.apiResrURL + '/api/product';

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL);
  }

  public detail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.productURL + `/${id}`);
  }

  public create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.productURL, product);
  }

  public update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.productURL + `/${id}`, product);
  }

  public delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.productURL + `/${id}`);
  }
}