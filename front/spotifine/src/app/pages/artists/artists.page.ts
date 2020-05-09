import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { SpotifyConnectorService } from '../../../services/spotify-connector.service';
import { IonInfiniteScroll } from '@ionic/angular';
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  limit: number;
  offset: number;
  artists: ArtistObjectFull[];
  artistsLoaded: boolean;

  constructor(private router: Router,
              public session: SessionService,
              private spotify: SpotifyConnectorService) {}

  async ngOnInit() {
    this.artistsLoaded = false;
    this.limit = 10;
    this.offset = 0;
    this.artists  = [];
    await this.getArtists();
  }

  async loadData() {
    if (this.offset >= 50) {
      this.infiniteScroll.disabled = true;
    } else {
    this.offset += 10;
    await this.getArtists();
    await this.infiniteScroll.complete();
    }
  }

  async getArtists() {
    const newArtists = await this.spotify.getUserTopArtists(this.limit, this.offset);
    if (newArtists) {
      Array.prototype.push.apply(this.artists, newArtists.items);
      this.artistsLoaded = true;
    }
  }
}
