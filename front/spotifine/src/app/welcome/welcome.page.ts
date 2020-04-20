import { Component, OnInit } from '@angular/core';
import {SpotifyConnectorService} from '../../services/spotify-connector.service'
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  authURI: string;

  constructor(private spotifyConnectorService: SpotifyConnectorService, private session: SessionService, private router: Router) { }

  async ngOnInit() {
    if (this.session.isAuth()) {
      const navigated = await this.router.navigate(['home'])
      if (navigated) console.log('navigated :)');
    } else {
      this.spotifyConnectorService.getAuthorizeURL().subscribe((value => {
        console.log('authURL value', value);
        this.authURI = value;
      }));
    }
  }
  authorize() {
    window.location.assign(this.authURI);
  }
}
