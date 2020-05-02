import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ApplicationState} from '../store/application_state/application_state.reducer'
import { Store } from '@ngrx/store';
import { setLoggedIn, setLoggedOut } from 'src/store/application_state/application_state.actions';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router, private store: Store<{ applicationState: ApplicationState }>) {
   }

  log_in(access_token: string, refresh_token: string){
     localStorage.setItem('access_token', access_token);
     localStorage.setItem('refresh_token', refresh_token);
     this.store.dispatch(setLoggedIn())
  }

  async log_out(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.store.dispatch(setLoggedOut())
    await this.router.navigateByUrl('welcome');
  }

  isAuth(): boolean {
    return this.get_access_token() !== null && this.get_access_token() !== '';
  }

  get_access_token(): string {
    return localStorage.getItem('access_token');
  }

  get_refresh_token(): string {
    return localStorage.getItem('refresh_token');
  }
}
