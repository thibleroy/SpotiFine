import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../../.env") });

export const env = {
    SF_BACKEND_ADDR_DEV: process.env.SF_BACKEND_ADDR_DEV,
    SF_BACKEND_ADDR_PROD: process.env.SF_BACKEND_ADDR_PROD,
    SF_BACKEND_PORT: process.env.SF_BACKEND_PORT,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_API_URI: process.env.SPOTIFY_API_URI
}
