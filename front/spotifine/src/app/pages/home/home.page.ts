import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {AuthService} from "../../../services/auth.service";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import ListOfCurrentUsersPlaylistsResponse = SpotifyApi.ListOfCurrentUsersPlaylistsResponse;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
    playlists: ListOfCurrentUsersPlaylistsResponse;
    playlists_loaded: boolean;
  constructor(private router: Router,
              private authService: AuthService,
              public session: SessionService,
              private spotify: SpotifyConnectorService) {}
  async ngOnInit() {
      await this.getPlaylists();
      if (!this.session.isAuth()) {
        await this.router.navigateByUrl('welcome');
      }
  }
  async getPlaylists() {
      this.playlists_loaded = false;
      this.playlists = await this.spotify.getUserPlaylists();
      this.playlists_loaded = true;
  }
}
