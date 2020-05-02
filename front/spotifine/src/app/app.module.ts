import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { SpotifyConnectorService } from "../services/spotify-connector.service";
import { SessionService } from "../services/session.service";
import { AuthService } from "../services/auth.service";
import { FooterModule } from "./components/footer/footer.module";
import { HeaderModule } from "./components/header/header.module";

import { StoreModule } from '@ngrx/store';
import { applicationStateReducer } from '../store/application_state/application_state.reducer';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, StoreModule.forRoot({ applicationState: applicationStateReducer }), IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FooterModule, HeaderModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpotifyConnectorService,
    SessionService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
