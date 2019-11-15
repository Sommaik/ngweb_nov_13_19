import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url: string;
  authHeaders: any;

  constructor(private http: HttpClient) {
    this.url = `${environment.API_ENPOINT}/company`;
    this.authHeaders = {
      Authorization: `bearer ${sessionStorage.getItem('TOKEN')}`
    };
  }

  findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url, {
      headers: this.authHeaders
    });
  }

  add(company: Company): Observable<any> {
    return this.http.post(this.url, company, {
      headers: this.authHeaders
    });
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.authHeaders
    });
  }

  findById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.url}/findById/${id}`, {
      headers: this.authHeaders
    });
  }

  update(id: string, company: Company): Observable<any> {
    return this.http.put(`${this.url}/${id}`, company, {
      headers: this.authHeaders
    });
  }
}
