import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {SessionService} from './session.service';

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(private session: SessionService, private router: Router) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuth = this.session.isAuth();
        if (!isAuth) {
            await this.session.logOut();
        }
        return isAuth;
    }

}
