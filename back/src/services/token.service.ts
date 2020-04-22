import {credentials} from '../configs/spotify.config'
import SpotifyWebApi from 'spotify-web-api-node';
import {ISpotifyToken} from "../interfaces";

export const refreshAccessToken = async(refresh_token: string): Promise<ISpotifyToken> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    console.log('data1')
    spotifyApi.setRefreshToken(refresh_token);
    console.log('data2')
    const data = await spotifyApi.refreshAccessToken();
    console.log('data3', data);
    return data.body;
}