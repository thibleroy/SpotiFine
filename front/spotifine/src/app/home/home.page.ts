import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SpotifyConnectorService} from "../../services/spotify-connector.service";
import {SessionService} from "../../services/session.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router: Router, private spotifyConnectorService: SpotifyConnectorService, private session: SessionService) {}

  ngOnInit() {
    if (JSON.stringify(this.router.getCurrentNavigation().finalUrl.queryParams) == JSON.stringify({})) {
      if (!this.session.isAuth()) {
        this.router.navigateByUrl('welcome');
      }
    } else {
      console.log('qp', this.router.getCurrentNavigation().finalUrl.queryParams)
        this.spotifyConnectorService.getTokens(this.router.getCurrentNavigation().finalUrl.queryParams).subscribe((val) => {
          console.log('val', val);
          this.session.log_in(val.access_token)
          this.router.navigateByUrl('home');
        });
      }
  }
  get_account(){
    if (this.session.isAuth()){
      this.spotifyConnectorService.getAccount(this.session.get_token()).subscribe((values) => {
        console.log('user values', values);
      });
    }
  }
}
