import {spotifyApi, scopes} from '../utils/api_factory'
import {randomBytes} from 'crypto';

export const getAuthURL = async(): Promise<string> => {
    return spotifyApi.createAuthorizeURL(scopes, randomBytes(5).toString('hex'));
}
export const authCodeGrant = async(code: string | null): Promise<SpotifyToken> => {
    const data = await spotifyApi.authorizationCodeGrant(<string> code)
    return {
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token
    }
}

