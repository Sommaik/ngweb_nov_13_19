import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post(`${environment.API_ENPOINT}/user`, user);
  }

  login(user): Observable<any> {
    return this.http.post(
      `${environment.API_ENPOINT}/login/doLogin`,
      user
    );
  }
}
