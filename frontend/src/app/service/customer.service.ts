import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerURL = environment.apiResrURL + '/api/customer';

  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customerURL);
  }

  public detail(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.customerURL + `/${id}`);
  }

  public create(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.customerURL, customer);
  }

  public update(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.customerURL + `/${id}`, customer);
  }

  public delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.customerURL + `/${id}`);
  }
}