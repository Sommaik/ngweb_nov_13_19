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

  constructor(private http: HttpClient) {
    this.url = `${environment.API_ENPOINT}/company`;
  }

  findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  add(company: Company): Observable<any> {
    return this.http.post(this.url, company);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  findById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.url}/findById/${id}`);
  }

  update(id: string, company: Company): Observable<any> {
    return this.http.put(`${this.url}/${id}`, company);
  }
}
