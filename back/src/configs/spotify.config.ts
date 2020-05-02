import env from '../../../lib/env';
export const credentials  = {
        clientId: env.SPOTIFY_CLIENT_ID,
        clientSecret: env.SPOTIFY_CLIENT_SECRET,
        redirectUri: env.SPOTIFY_REDIRECT_URI
    },
    scopes = ['user-read-private', 'user-read-email', 'user-top-read'];
