import {env} from '../../../lib/env';
import {ISpotifyCredentials} from '../interfaces';

export const credentials: ISpotifyCredentials  = {
        clientId: env.SPOTIFY_CLIENT_ID,
        clientSecret: env.SPOTIFY_CLIENT_SECRET,
        redirectUri: env.SPOTIFY_REDIRECT_URI
    },
    scopes = ['user-read-private', 'user-read-email'];
