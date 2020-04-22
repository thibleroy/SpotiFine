export interface ISpotifyToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface ISpotifyAuthToken extends ISpotifyToken {
    refresh_token: string;
}

export interface ISpotifyCredentials {
    clientId?: string;
    clientSecret?: string;
    redirectUri: string;
}