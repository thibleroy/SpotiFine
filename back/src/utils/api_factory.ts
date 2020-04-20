import {env} from "../../../lib/env";
import SpotifyWebApi from "spotify-web-api-node";

export const credentials = {
        clientId: env.SPOTIFY_CLIENT_ID,
        clientSecret: env.SPOTIFY_CLIENT_SECRET,
        redirectUri: env.SPOTIFY_REDIRECT_URI
    },
    scopes = ['user-read-private', 'user-read-email'];
export const spotifyApi = new SpotifyWebApi(credentials);
