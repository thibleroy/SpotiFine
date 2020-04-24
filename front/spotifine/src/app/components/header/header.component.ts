import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {randomString} from "../../../utils";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loaded: boolean;
  account: SpotifyApi.CurrentUsersProfileResponse;
  constructor(public session: SessionService,
              public spotify: SpotifyConnectorService,
              private auth: AuthService,
              private router: Router) { }

  async ngOnInit() {
    this.loaded = false;
    if (this.session.isAuth()) {
        try {
          this.account = await this.spotify.getAccount();
          this.loaded = true;
        } catch (e) {
          this.auth.refreshToken(this.session.get_refresh_token());
          this.account = await this.spotify.getAccount();
          this.loaded = true;
        } finally {
          if (!this.loaded) {
            await this.session.log_out();
          }
        }
    } else {
      console.log('hey', this.router.url);
      if (this.router.url !== '/welcome') {
        await this.router.navigateByUrl('/welcome');
      }
    }
  }

  authorize() {
    const state: string = randomString(7);
    this.auth.getAuthorizeURL(state).subscribe((value => {
      window.location.assign(value);
    }));
  }
}
