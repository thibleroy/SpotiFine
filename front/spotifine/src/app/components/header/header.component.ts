import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../../../store/application_state/application_state.reducer';
import { SpotifyConnectorService } from '../../../services/spotify-connector.service';
import { randomString } from '../../../utils';
import { AuthService } from '../../../services/auth.service';
import { identifiers } from '../../../html_identifiers';
import { Observable } from 'rxjs';


@Component({
  selector: 'sf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentWindowWidth: number;
  account: SpotifyApi.CurrentUsersProfileResponse;
  identifiers = identifiers;
  applicationState$: Observable<ApplicationState>;
  isLoaded: boolean;
  isLoggedIn: boolean;
  constructor(public session: SessionService,
              private spotify: SpotifyConnectorService,
              private auth: AuthService,
              private store: Store<{ applicationState: ApplicationState }>) {}

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  async ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
    this.applicationState$ = this.store.pipe(select('applicationState'));
    this.isLoaded = false;
    this.isLoggedIn = false;
    this.applicationState$.subscribe((appState: ApplicationState) => {
      this.isLoggedIn = appState.isLoggedIn;
      this.account = appState.account;
      this.isLoaded = appState.isLoaded;
    });
  }

  authorize() {
    const state: string = randomString(7);
    this.auth.getAuthorizeURL(state).subscribe((value => {
      window.location.assign(value);
    }));
  }
}
