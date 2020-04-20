import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  log_in(token: string){
    localStorage.setItem('sf_token', token);
  }

  async log_out(){
    localStorage.removeItem('sf_token');
    await this.router.navigateByUrl('welcome');
  }

  isAuth(): boolean {
    return this.get_token() !== null && this.get_token() !== ''
  }

  get_token(): string {
    return localStorage.getItem('sf_token')
  }
}
