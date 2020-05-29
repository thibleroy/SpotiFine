import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  Router, RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
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
  identifiers = identifiers;
  routes: CustomRoutes;
  applicationState$: Observable<ApplicationState>;
  isLoggedIn$: boolean;
  selectedPath: string;
  loading = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private store: Store<{ applicationState: ApplicationState }>
  ) {
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
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      }
    });

    if (window.Cypress) {
      console.log('under test');
    }
    this.initializeApp();
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
