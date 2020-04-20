import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import {SessionService} from "../../../services/session.service";
import {ModalController} from "@ionic/angular";
import {AccountComponent} from "../../components/modal/account/account.component";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  constructor(private router: Router, private spotifyConnectorService: SpotifyConnectorService,
              public session: SessionService,
              private modalController: ModalController) {}

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
}
