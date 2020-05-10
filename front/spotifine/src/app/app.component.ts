import {Component, HostListener} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { routes } from './app-routing.module';
import { CustomRoutes, CustomRoute } from 'src/lib/custom_routes';
import { identifiers } from '../html_identifiers';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/application_state/application_state.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentWindowWidth: number;
  identifiers = identifiers;
  routes: CustomRoutes;
  applicationState$: Observable<ApplicationState>;
  isLoggedIn$: boolean;
  selectedPath: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private store: Store<{ applicationState: ApplicationState }>
  ) {
    this.currentWindowWidth = window.innerWidth;
    this.routes = routes.filter((route: CustomRoute) => route.name !== undefined && route.data_cy !== undefined && route.icon !== undefined);
    this.selectedPath = '';
    this.isLoggedIn$ = false;
    this.applicationState$ = store.pipe(select('applicationState'));

    this.applicationState$.subscribe((appState: ApplicationState) => {
      this.isLoggedIn$ = appState.isLoggedIn;
    });
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url !== undefined) {
        this.selectedPath = event.url;
      }
    });

    if (window.Cypress) {
      console.log('under test');
    }
    this.initializeApp();
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }
}
