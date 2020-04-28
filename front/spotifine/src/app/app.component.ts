import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { routes } from './app-routing.module'
import { CustomRoutes, CustomRoute } from 'src/lib/custom_routes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  routes: CustomRoutes = routes.filter((route: CustomRoute) => route.name != undefined &&  route.data_cy != undefined && route.icon != undefined);
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {

    this.router.events.subscribe((event: RouterEvent) => {
      if(event.url != undefined){
        this.selectedPath = event.url;
      }
    });

    this.initializeApp();
  }

  selectedPath: string = '';

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }
}
