/**
 * env variables located in .env
 */
import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../../.env") });
interface Environment {
    SF_BACKEND_ADDR?: string;
    SF_BACKEND_HTTP_PORT?: number;
    SF_BACKEND_HTTPS_PORT?: number;
    SF_FRONTEND_ADDR?: string,
    SF_FRONTEND_PORT?:  number;
    SPOTIFY_CLIENT_ID?: string;
    SPOTIFY_CLIENT_SECRET?: string;
    SPOTIFY_API_URI?: string;
    SPOTIFY_ACCOUNT_URI?: string;
    SPOTIFY_REDIRECT_URI?: string;
    MONGODB_URI?: string;
    MONGODB_PORT?: string;
    PRODUCTION?: number;

}
const default_env: Environment = {
    SF_BACKEND_ADDR: process.env.SF_BACKEND_ADDR,
    SF_BACKEND_HTTP_PORT: parseInt(process.env.SF_BACKEND_HTTP_PORT || ''),
    SF_BACKEND_HTTPS_PORT: parseInt(process.env.SF_BACKEND_HTTPS_PORT || ''),
    SF_FRONTEND_ADDR: process.env.SF_FRONTEND_ADDR,
    SF_FRONTEND_PORT:  parseInt(process.env.SF_FRONTEND_PORT || ''),
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_API_URI: process.env.SPOTIFY_API_URI,
    SPOTIFY_ACCOUNT_URI: process.env.SPOTIFY_ACCOUNTS_URI,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_PORT: process.env.MONGODB_PORT,
    PRODUCTION: parseInt(process.env.PRODUCTION || '')
}

/**
 * redirect spotify uri should be https when in production mode
 */

const prod_env = {
    ...default_env,
    SPOTIFY_REDIRECT_URI: `https://${process.env.SF_FRONTEND_ADDR}:${parseInt(process.env.SF_FRONTEND_PORT || '')}/callback`,
}

const dev_env = {
    ...default_env,
    SPOTIFY_REDIRECT_URI: `http://${process.env.SF_FRONTEND_ADDR}:${parseInt(process.env.SF_FRONTEND_PORT || '')}/callback`,
}

let env: Environment;
if (default_env.PRODUCTION) {
    env = prod_env;
} else env = dev_env;
export default env;

