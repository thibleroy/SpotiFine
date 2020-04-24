import {credentials} from '../configs/spotify.config'
import "spotify-web-api-node";
import SpotifyWebApi from "spotify-web-api-node";
export const refreshAccessToken = async(refresh_token: string): Promise<any> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    spotifyApi.setRefreshToken(refresh_token);
    const data = await spotifyApi.refreshAccessToken();
    return data.body;
}