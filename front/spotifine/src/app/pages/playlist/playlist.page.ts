import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpotifyConnectorService} from '../../../services/spotify-connector.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  playlist: SpotifyApi.PlaylistObjectFull;
  loaded: boolean;
  constructor(private router: Router, private spotifyConnectorService: SpotifyConnectorService) { }

  async ngOnInit() {
    this.loaded = false;
    await this.getPlaylist();
  }

  async getPlaylist() {
    const id = this.router.url.split('/playlist/')[1];
    try {
      this.playlist = await this.spotifyConnectorService.getPlaylist(id);
      this.loaded = true;
    } catch (e) {
      alert('error');
    }
  }
}
