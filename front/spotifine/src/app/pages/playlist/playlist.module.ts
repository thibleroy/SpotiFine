import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistPageRoutingModule } from './playlist-routing.module';

import { PlaylistPage } from './playlist.page';
import {TrackModule} from '../../components/track/track.module';
import {ItemModule} from '../../components/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistPageRoutingModule,
      TrackModule,
      ItemModule
  ],
  declarations: [PlaylistPage]
})
export class PlaylistPageModule {}
