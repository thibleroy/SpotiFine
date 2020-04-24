import { resolve } from "path";
import { config } from "dotenv";
/*if(process.argv[2].split('=')[1] === 'dev') {
        config({ path: resolve(__dirname, "../../../.env") });
}*/
config({ path: resolve(__dirname, "../../../.env") });
export const env = {
    SF_BACKEND_ADDR_DEV: process.env.SF_BACKEND_ADDR_DEV,
    SF_BACKEND_ADDR_PROD: process.env.SF_BACKEND_ADDR_PROD,
    SF_BACKEND_PORT: parseInt(process.env.SF_BACKEND_PORT || ''),
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_API_URI: process.env.SPOTIFY_API_URI,
    SPOTIFY_ACCOUNT_URI: process.env.SPOTIFY_ACCOUNTS_URI,
    SF_FRONTEND_PORT: process.env.SF_FRONTEND_PORT,
    SF_FRONTEND_ADDR_DEV: process.env.SF_FRONTEND_ADDR_DEV,
    SPOTIFY_REDIRECT_URI: `http://${process.env.SF_FRONTEND_ADDR_DEV}:${parseInt(process.env.SF_FRONTEND_PORT || '')}/callback`
}
