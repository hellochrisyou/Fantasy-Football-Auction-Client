import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:4200/',
        // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        // 'Access-Control-Allow-Headers': '*'
      }
    });
    return next.handle(req);
  }
}
