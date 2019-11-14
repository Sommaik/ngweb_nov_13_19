import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${environment.API_ENPOINT}/company`, {
      headers: {
        Authorization: 'bearer ' + sessionStorage.getItem('TOKEN')
      }
    });
  }
}
