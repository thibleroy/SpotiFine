import {scopes, credentials} from '../configs/spotify.config'
import SpotifyWebApi from 'spotify-web-api-node';
export const getAuthURL = async(state: string): Promise<string> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    return spotifyApi.createAuthorizeURL(scopes, state);
}
export const authCodeGrant = async(code: string): Promise<any> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    const data = await spotifyApi.authorizationCodeGrant(<string> code);
    return data.body
}
export const verifyAuth = async (access_token: string): Promise<any> => {
    const spotifyApi = new SpotifyWebApi(credentials);
    spotifyApi.setAccessToken(access_token);
    return await spotifyApi.getMe();
}