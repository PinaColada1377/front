import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
  } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    private authService: AuthService;
    constructor(private injector: Injector) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService = this.injector.get(AuthService);
        const token: string = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(req)
    }
}

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((res: any) => {
                if (res instanceof HttpErrorResponse && res.status === 401) {
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/login')
                }
                return Observable.throw(res)
            })
        )
    }
}