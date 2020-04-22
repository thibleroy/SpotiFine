import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {SessionService} from "../../../services/session.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  constructor(private router: Router, private spotifyConnectorService: SpotifyConnectorService,
              public session: SessionService) {}

  async ngOnInit() {
    if (JSON.stringify(this.router.getCurrentNavigation().finalUrl.queryParams) == JSON.stringify({})) {
      if (!this.session.isAuth()) {
        await this.router.navigateByUrl('welcome');
      }
    } else {
        this.spotifyConnectorService.getCallback(this.router.getCurrentNavigation().finalUrl.queryParams).subscribe(async(val) => {
          this.session.log_in(val.access_token, val.refresh_token);
          await this.router.navigateByUrl('home');
        });
      }
  }
}
