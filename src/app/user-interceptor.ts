import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export  class  UserInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(req.urlWithParams);
      const start = new Date().getTime();
      return  next.handle(req).pipe(
        tap((response) => {
                if (response  instanceof  HttpResponse) {
                  const elapsed = new Date().getTime() - start;
                  console.log(elapsed);
                }
        }));
      }
    }
