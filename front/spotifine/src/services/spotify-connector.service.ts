import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {IAccount} from "../interfaces/account";
import {randomString} from "../utils"
import {ISpotifyToken} from '../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectorService {

  api = `http://${environment.SF_BACKEND_ADDR_DEV}:${environment.SF_BACKEND_PORT}`;

  constructor(private http: HttpClient) { }

  getAuthorizeURL(state: string): Observable<string>{
    return this.http.get(`${this.api}/login`, {responseType: 'text', headers: {state: state}});
  }

  getCallback(qP): Observable<{access_token: string, refresh_token: string}>{
    return this.http.get<{access_token: string, refresh_token: string}>(`${this.api}/callback`, {headers: qP});
  }

  refreshToken(refresh_token: string): Observable<ISpotifyToken>{
    return this.api_get('/token', {refresh_token: refresh_token});
  }

  getAccount(): Observable<IAccount>{
    return this.api_get(`/account`);
  }

  api_get(path: string, headers?: any): Observable<any> {
    return this.http.get(this.api + path, {headers: {... headers}})
  }

  authorize() {
    const state: string = randomString(7);
    this.getAuthorizeURL(state).subscribe((value => {
      console.log('authURL value', value);
      window.location.assign(value);
    }));

  }

}
