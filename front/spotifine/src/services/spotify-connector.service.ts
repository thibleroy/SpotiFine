import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectorService {

  api = `http://${environment.SF_BACKEND_ADDR_DEV}:${environment.SF_BACKEND_PORT}`;

  constructor(private http: HttpClient) { }

  getAuthorizeURL(): Observable<string>{
    return this.http.get(`${this.api}/login`, {responseType: 'text'});
  }

  getTokens(qP): Observable<any>{
    return this.http.get(`${this.api}/callback`, {headers: qP});
  }

  getAccount(user_token: string): Observable<any>{
    const headers = {
      authorization: user_token
    }
    return this.http.get(`${this.api}/account`, {headers: headers})
  }
}
