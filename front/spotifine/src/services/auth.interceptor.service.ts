import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {set_header} from "../utils";
import {SpotifyConnectorService} from "./spotify-connector.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private spotify: SpotifyConnectorService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = this.spotify.spotifyApi.getAccessToken();
        if (access_token) {
            request = request.clone(set_header(this.spotify.spotifyApi.getAccessToken()));
        }
        return next.handle(request);
    }
}