import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionService} from "./session.service";
import {set_header} from "../utils";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private session: SessionService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted');
        const access_token = this.session.get_access_token();
        if (access_token) {
            console.log('intercepted2');
            request = request.clone(set_header(this.session.get_access_token()));
        }

        return next.handle(request);
    }
}