import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {ISpotifyToken} from "../../../../lib/interfaces/auth";
import {SessionService} from "./session.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    api = `https://${environment.SF_BACKEND_ADDR_DEV}:${environment.SF_BACKEND_PORT}`;

    constructor(private http: HttpClient, private session: SessionService) {}

    getAuthorizeURL(state: string): Observable<string>{
        return this.http.get(`${this.api}/login`, {responseType: 'text', headers: {state: state}});
    }

    getCallback(qP: any): Observable<{access_token: string, refresh_token: string}>{
        return this.http.get<{access_token: string, refresh_token: string}>(`${this.api}/callback`, {headers: qP});
    }

    refreshToken(refresh_token: string): Observable<ISpotifyToken>{
        return this.api_get('/token', {refresh_token: refresh_token});
    }

    api_get(path: string, headers?: any): Observable<any> {
        return this.http.get(this.api + path, {headers: {... headers, access_token: this.session.get_access_token()}});
    }

}
