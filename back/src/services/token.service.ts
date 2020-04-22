import {credentials} from '../configs/spotify.config'
import SpotifyWebApi from 'spotify-web-api-node';
import {ISpotifyToken} from "../interfaces";

export const refreshAccessToken = async(refresh_token: string): Promise<ISpotifyToken> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    spotifyApi.setRefreshToken(refresh_token);
    const data = await spotifyApi.refreshAccessToken();
    return data.body;
}