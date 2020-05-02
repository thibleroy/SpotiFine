import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {SpotifyConnectorService} from "../../../services/spotify-connector.service";
import ListOfCurrentUsersPlaylistsResponse = SpotifyApi.ListOfCurrentUsersPlaylistsResponse;
@Component({
  selector: 'app-playlists',
  templateUrl: 'playlists.page.html',
  styleUrls: ['playlists.page.scss']
})
export class PlaylistsPage implements OnInit{
    playlists: ListOfCurrentUsersPlaylistsResponse;
    playlists_loaded: boolean;
  constructor(private router: Router,
              public session: SessionService,
              private spotify: SpotifyConnectorService) {}
  async ngOnInit() {
      this.playlists_loaded = false;
      if (!this.session.isAuth()) {
        await this.router.navigateByUrl('welcome');
      }
      else{
      await this.getPlaylists();
      }
  }
  async getPlaylists() {
      this.playlists = await this.spotify.getUserPlaylists();
      if(this.playlists){
      this.playlists_loaded = true;
      }
  }
}
