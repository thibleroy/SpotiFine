import {spotifyApi} from '../utils/api_factory';

export const getAccount = async(access_token: string):  Promise<any> => {
    await spotifyApi.setAccessToken(access_token);
    const resp = await spotifyApi.getMe();
    return resp.body
}
