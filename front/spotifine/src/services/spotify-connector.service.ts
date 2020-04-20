import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {IAccount} from "../interfaces/account";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectorService {

  api = `http://${environment.SF_BACKEND_ADDR_DEV}:${environment.SF_BACKEND_PORT}`;

  constructor(private http: HttpClient, private auth: SessionService) { }

  getAuthorizeURL(): Observable<string>{
    return this.http.get(`${this.api}/login`, {responseType: 'text'});
  }

  getTokens(qP): Observable<any>{
    return this.http.get(`${this.api}/callback`, {headers: qP});
  }

  getAccount(): Observable<IAccount>{
    return this.api_get(`${this.api}/account`);
  }

  api_get(url: string, headers?: any): Observable<any> {
    const sf_headers = {...headers,
      authorization: this.auth.get_token()
    }
    console.log('headers', sf_headers);
    return this.http.get(url, {headers: sf_headers})
  }

  authorize() {
    this.getAuthorizeURL().subscribe((value => {
      console.log('authURL value', value);
      window.location.assign(value);
    }));

  }

}
