import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from "../../../services/session.service";
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../../../store/application_state/application_state.reducer'
import { SpotifyConnectorService } from "../../../services/spotify-connector.service";
import { randomString } from "../../../utils";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { identifiers } from '../../../html_identifiers'
import { Observable } from 'rxjs';


@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentWindowWidth: Number;
  account: SpotifyApi.CurrentUsersProfileResponse;
  identifiers = identifiers;
  applicationState$: Observable<ApplicationState>;
  isLoaded = false;
  isLoggedIn: boolean = false;

  constructor(public session: SessionService,
    public spotify: SpotifyConnectorService,
    private auth: AuthService,
    private router: Router,
    private store: Store<{ applicationState: ApplicationState }>) {
    this.currentWindowWidth = window.innerWidth
    this.applicationState$ = store.pipe(select('applicationState'));
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

  async ngOnInit() {

    this.applicationState$.subscribe(async (appState: ApplicationState) => {
      this.isLoggedIn = appState.isLoggedIn;
      this.account = appState.account;
      this.isLoaded = appState.isLoaded;
    })
  }

  authorize() {
    const state: string = randomString(7);
    this.auth.getAuthorizeURL(state).subscribe((value => {
      window.location.assign(value);
    }));
  }
}
