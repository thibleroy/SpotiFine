import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import {SessionService} from "./session.service";


@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectorService {

  spotifyApi: SpotifyWebApi.SpotifyWebApiJs;
  constructor(private session: SessionService) {
    this.spotifyApi = new SpotifyWebApi();
  }
  async setTokenToSpotifyObject() {
    await this.spotifyApi.setAccessToken(this.session.get_access_token());
  }
  async getAccount(): Promise<SpotifyApi.CurrentUsersProfileResponse>{
    await this.setTokenToSpotifyObject()
    return await this.spotifyApi.getMe();
  }
  async getUserPlaylists(): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    await this.setTokenToSpotifyObject();
    return await this.spotifyApi.getUserPlaylists();
  }
  async is_token_valid(): Promise<boolean> {
    try {
      await this.getAccount();
      return true;
    } catch (e) {
      return false;
    }
  }
}
