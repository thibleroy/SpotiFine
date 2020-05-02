import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { SpotifyConnectorService } from "../../../services/spotify-connector.service";
import { IonInfiniteScroll } from '@ionic/angular';
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  limit: number = 10;
  offset: number = 0;
  artists: ArtistObjectFull[] = [];
  artists_loaded: boolean = false;

  constructor(private router: Router,
    public session: SessionService,
    private spotify: SpotifyConnectorService) {

  }

  async ngOnInit() {
    if (!this.session.isAuth()) {
      await this.router.navigateByUrl('welcome');
    }
    else {
      await this.getArtists();
    }
  }

  async loadData($event) {
    if (this.offset >= 50) {
      this.infiniteScroll.disabled = true
    }
    else{
    await this.getArtists();
    this.offset += 10;
    this.infiniteScroll.complete();
    }
  }

  async getArtists() {
    const newArtists = await this.spotify.getUserTopArtists(this.limit, this.offset)
    if (newArtists) {
      Array.prototype.push.apply(this.artists, newArtists.items);
      this.artists_loaded = true;
    }
  }
}
