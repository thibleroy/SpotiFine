import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {SessionService} from "./session.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api : string = environment.PRODUCTION ? `https://${environment.SF_BACKEND_ADDR}:${environment.SF_BACKEND_HTTPS_PORT}` : `http://${environment.SF_BACKEND_ADDR}:${environment.SF_BACKEND_HTTP_PORT}`;
    //api = this._http + `://${environment.SF_BACKEND_ADDR}:${environment.SF_BACKEND_PORT}`;

    constructor(private http: HttpClient, private session: SessionService) {}

    getAuthorizeURL(state: string): Observable<string>{
        return this.http.get(`${this.api}/login`, {responseType: 'text', headers: {state: state}});
    }

    getCallback(qP: any): Observable<{access_token: string, refresh_token: string}>{
        return this.http.get<{access_token: string, refresh_token: string}>(`${this.api}/callback`, {headers: qP});
    }

    refreshToken(refresh_token: string): Observable<any>{
        return this.api_get('/token', {refresh_token: refresh_token});
    }

    api_get(path: string, headers?: any): Observable<any> {
        return this.http.get(this.api + path, {headers: {... headers, access_token: this.session.get_access_token()}});
    }
}
