import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.API_ENPOINT}/customer`;
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  add(customer: Customer): Observable<any> {
    return this.http.post(this.url, customer);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/findById/${id}`);
  }

  update(id: string, customer: Customer): Observable<any> {
    return this.http.put(`${this.url}/${id}`, customer);
  }
}
