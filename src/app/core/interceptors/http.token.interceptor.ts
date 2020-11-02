import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTION HTTP', req);

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const headers = this.jwtService.getToken();
    if (headers) {
      console.log('headers', headers)
      // headersConfig['Authorization'] = `Token ${token}`;
      headersConfig['access-token'] = headers['access-token'];
      headersConfig['client'] = headers['client'];
      headersConfig['uid'] = headers['uid'];
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
