import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import {HeaderModule} from "../../components/header/header.module";
import {FooterModule} from "../../components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
      HeaderModule,
      FooterModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}