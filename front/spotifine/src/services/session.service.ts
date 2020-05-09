import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationState} from '../store/application_state/application_state.reducer';
import { Store } from '@ngrx/store';
import { setLoggedIn, setLoggedOut } from 'src/store/application_state/application_state.actions';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router, private store: Store<{ applicationState: ApplicationState }>) {
   }

  logIn(accessToken: string, refreshToken: string) {
     localStorage.setItem('accessToken', accessToken);
     localStorage.setItem('refreshToken', refreshToken);
     this.store.dispatch(setLoggedIn());
  }

  async logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.store.dispatch(setLoggedOut());
    await this.router.navigateByUrl('welcome');
  }

  isAuth(): boolean {
    return this.getAccessToken() !== null && this.getAccessToken() !== '';
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }
}
