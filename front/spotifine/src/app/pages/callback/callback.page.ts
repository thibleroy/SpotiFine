import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { SpotifyConnectorService } from '../../../services/spotify-connector.service'
@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private session: SessionService,
    public spotify: SpotifyConnectorService
  ) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation()) {
      this.auth.getCallback(this.router.getCurrentNavigation().finalUrl.queryParams).subscribe(async (val) => {
        this.session.log_in(val.access_token, val.refresh_token);
        await this.spotify.getAccount();
        await this.router.navigateByUrl('/welcome');
      });
    }
  }
}
