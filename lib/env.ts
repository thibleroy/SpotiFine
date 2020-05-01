/**
 * env variables located in .env
 */
import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../../.env") });
export const prod = process.env.PRODUCTION
const default_env = {
    SF_BACKEND_ADDR: process.env.SF_BACKEND_ADDR,
    SF_BACKEND_PORT: parseInt(process.env.SF_BACKEND_PORT || ''),
    SF_FRONTEND_ADDR: process.env.SF_FRONTEND_ADDR,
    SF_FRONTEND_PORT:  parseInt(process.env.SF_FRONTEND_PORT || ''),
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_API_URI: process.env.SPOTIFY_API_URI,
    SPOTIFY_ACCOUNT_URI: process.env.SPOTIFY_ACCOUNTS_URI,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_PORT: process.env.MONGODB_PORT,
    PRODUCTION: prod
}

/**
 * redirect spotify uri should be https when in production mode
 */

const prod_env = {
    ...default_env,
    SPOTIFY_REDIRECT_URI: `https://${process.env.SF_FRONTEND_ADDR_DEV}:${parseInt(process.env.SF_FRONTEND_PORT || '')}/callback`,
}

const dev_env = {
    ...default_env,
    SPOTIFY_REDIRECT_URI: `http://${process.env.SF_FRONTEND_ADDR_DEV}:${parseInt(process.env.SF_FRONTEND_PORT || '')}/callback`,
}

let env = prod_env;

if (prod === 'true') {
    env = prod_env;
} else env = dev_env;

export default env;

