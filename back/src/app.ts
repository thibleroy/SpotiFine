import {env} from '../../lib/env'
import fs from 'fs'
import express from 'express';
import bp from 'body-parser';
import {loggerMiddleware} from './middlewares/logger.middleware'
import {set_headers} from './middlewares/headers.middleware'
import {routers} from './routes/index.route';
import {error_handler, } from "./middlewares/errors.middleware";
import https from 'https';


const app = express();
app.use(set_headers);
app.use(loggerMiddleware);
app.use(bp.json());

routers.forEach((router) => {
    app.use(router.route, router.router);
});

app.use(error_handler);

const port = env.SF_BACKEND_PORT || 12345;

const server = https.createServer({
    'key' : fs.readFileSync('../lib/https_credentials/server.key', 'utf8');,
    'cert' : fs.readFileSync('../lib/https_credentials/server.cert', 'utf8');
}, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});

export default app;