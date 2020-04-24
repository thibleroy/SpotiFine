import {scopes, credentials} from '../configs/spotify.config'
import SpotifyWebApi from 'spotify-web-api-node';
import {ISpotifyAuthToken} from "../../../lib/interfaces/auth";
export const getAuthURL = async(state: string): Promise<string> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    return spotifyApi.createAuthorizeURL(scopes, state);
}
export const authCodeGrant = async(code: string): Promise<ISpotifyAuthToken> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    const data = await spotifyApi.authorizationCodeGrant(<string> code);
    return data.body
}

