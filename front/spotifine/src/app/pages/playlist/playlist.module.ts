import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistPageRoutingModule } from './playlist-routing.module';

import { PlaylistPage } from './playlist.page';
import {TrackModule} from "../../components/track/track.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistPageRoutingModule,
      TrackModule
  ],
  declarations: [PlaylistPage]
})
export class PlaylistPageModule {}
