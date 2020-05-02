import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlaylistsPage } from './playlists.page';
import {HeaderModule} from "../../components/header/header.module";
import {PlaylistsModule} from "../../components/playlists/playlists.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaylistsPage
      }
    ]),
      HeaderModule,
      PlaylistsModule
  ],
  entryComponents: [],
  declarations: [PlaylistsPage]
})
export class PlaylistsPageModule {}
