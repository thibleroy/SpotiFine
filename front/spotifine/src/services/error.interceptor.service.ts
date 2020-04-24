import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, filter, switchMap, take} from "rxjs/operators";
import {SpotifyConnectorService} from "./spotify-connector.service";
import {set_header} from "../utils";
import {SessionService} from "./session.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{
    private is_refreshing = new BehaviorSubject<boolean>(false);
    constructor(private spotify: SpotifyConnectorService, private session: SessionService, private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone(set_header(this.spotify.spotifyApi.getAccessToken()))).pipe(
            catchError(err => {
                switch (err.status) {
                    case 400:
                        this.session.log_out().then(() => {
                            alert('Refresh token expired. Please log in again.')
                        });
                        break;
                    case 401:
                        return this.handle401Error(req, next);
                    default: return throwError(err);
                }
            }),
        );
    }
    private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.is_refreshing.getValue()) {
            this .is_refreshing.next(true);
            this.auth.refreshToken(this.session.get_refresh_token()).subscribe((token) => {
                this.session.log_in(token.access_token, this.session.get_refresh_token());
                this.is_refreshing.next(false);
            });
        }
        return this.is_refreshing.pipe(
                filter(is_refreshing => is_refreshing === false), take(1),
                switchMap(() => this.spotify.spotifyApi.getAccessToken()
                ? next.handle(req.clone(set_header(this.spotify.spotifyApi.getAccessToken())))
                    : throwError(new Error('Not authorized'))
                )
            )

    }
}
