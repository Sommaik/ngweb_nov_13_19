import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem('TOKEN')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('TOKEN')}`
        }
      });
    }

    return next.handle(request);
  }
}
