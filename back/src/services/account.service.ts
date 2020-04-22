import {credentials} from '../configs/spotify.config'
import SpotifyWebApi from 'spotify-web-api-node';

export const getAccount = async(access_token: string):  Promise<any> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    spotifyApi.setAccessToken(access_token);
    const resp = await spotifyApi.getMe();
    return resp.body
}
