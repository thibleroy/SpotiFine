import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application_state/application_state.reducer';
import { setAccount } from 'src/store/application_state/application_state.actions';
// @ts-ignore
import {from} from 'node-vibrant';


@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectorService {

  spotifyApi: SpotifyWebApi.SpotifyWebApiJs;
  constructor(private session: SessionService, private auth: AuthService, private store: Store<{ applicationState: ApplicationState }>) {
    this.spotifyApi = new SpotifyWebApi();
    if (this.session.isAuth()) {
      this.getAccount();
    }
  }
  async setTokenToSpotifyObject() {
    await this.spotifyApi.setAccessToken(this.session.get_access_token());
  }
  async getAccount(): Promise<void> {
    const account = await this.spotifyApiRequest(this.spotifyApi.getMe);
    if (account) {
      this.store.dispatch(setAccount({account}));
    }
  }
  async getUserPlaylists(): Promise<SpotifyApi.ListOfUsersPlaylistsResponse> {
    return await this.spotifyApiRequest(this.spotifyApi.getUserPlaylists);
  }

  async getUserTopArtists(limit: number, offset: number): Promise<SpotifyApi.UsersTopArtistsResponse> {
    const options = {limit, offset};
    //spotify api limit to retrieve the first 50 artists
    if (offset > 50) {
      return null;
    }
    return await this.spotifyApiRequest(this.spotifyApi.getMyTopArtists, options);
  }

  async spotifyApiRequest(fun, options?): Promise<any> {
    try {
      await this.setTokenToSpotifyObject();
      return options !== undefined ? await fun(options) : await fun();
    } catch (e) {
      try {
        this.auth.refreshToken(this.session.get_refresh_token());
        return options !== undefined ? await fun(options) : await fun();
      } catch (e) {
        await this.session.log_out();
        return null;
      }
    }
  }

  async getPlaylist(id: string): Promise<SpotifyApi.PlaylistObjectFull> {
    return this.spotifyApiRequest(this.spotifyApi.getPlaylist, id);
  }

  async getHexFromImg(image: SpotifyApi.ImageObject): Promise<string> {
      const palette = await from(image.url).getPalette();
      return palette.LightVibrant.getHex();
  }
}
