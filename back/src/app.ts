import env from '../../lib/env'
import  {readFileSync} from 'fs'
import {createServer as createHttpsServer} from 'https';
import {createServer as createHttpServer} from 'http';

import {connect_db} from "./utils/mongo.util";

import spotifineApi from './server'

/**
 * Use configuration depending on environment mode
 */

if(env.PRODUCTION) {
    connect_db('spotifine');
} else {
    connect_db('cypress');
}
createHttpsServer({
    key: readFileSync('../lib/https_credentials/server.key'),
    cert: readFileSync('../lib/https_credentials/server.cert')
}, spotifineApi).listen(env.SF_BACKEND_HTTPS_PORT, () => {
    console.log('Secured server listening port', env.SF_BACKEND_HTTPS_PORT)
});
createHttpServer(spotifineApi).listen(env.SF_BACKEND_HTTP_PORT, () => {
    console.log('Unsecured server listening port', env.SF_BACKEND_HTTP_PORT)
});
