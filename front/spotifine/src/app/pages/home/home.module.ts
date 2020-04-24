import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {HeaderModule} from "../../components/header/header.module";
import {FooterModule} from "../../components/footer/footer.module";
import {PlaylistsModule} from "../../components/playlists/playlists.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
      HeaderModule,
      FooterModule,
      PlaylistsModule
  ],
  entryComponents: [],
  declarations: [HomePage]
})
export class HomePageModule {}
