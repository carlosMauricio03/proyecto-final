import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderURL = environment.apiResrURL + '/api/order';

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.orderURL);
  }

  public detail(id: string): Observable<Order> {
    return this.httpClient.get<Order>(this.orderURL + `/${id}`);
  }

  public create(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.orderURL, order);
  }

  public update(id: string, order: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.orderURL + `/${id}`, order);
  }

  public delete(id: string): Observable<Order> {
    return this.httpClient.delete<Order>(this.orderURL + `/${id}`);
  }
}