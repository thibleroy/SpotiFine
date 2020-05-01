import env from '../../lib/env'
import fs from 'fs'
import spotifineApi from './server'
const port = env.SF_BACKEND_PORT || 66666;
import {createServer as createHttpsServer} from 'https';
import {createServer as createHttpServer} from 'https';
import {connect_db} from "./utils/mongo.util";


if(env.PRODUCTION === 'true') {
    connect_db('spotifine');
    createHttpsServer({
        key: fs.readFileSync('../lib/https_credentials/server.key', 'utf8'),
        cert: fs.readFileSync('../lib/https_credentials/server.cert', 'utf8')
    }, spotifineApi).listen(port, () => {
        console.log('Secured server listening port', port)
    });

} else {
    connect_db('cypress');
    createHttpServer(spotifineApi).listen(port, () => {
        console.log('Unsecured server listening port', port)
    })
}
