import {env} from '../../lib/env'
import fs from 'fs'
import express from 'express';
import bp from 'body-parser';
import {loggerMiddleware} from './middlewares/logger.middleware'
import {headersMiddleware} from './middlewares/headers.middleware'
import {authMiddleware} from './middlewares/auth.middleware';
import {routers} from './routes/index.route';
import callbackRouter from './routes/callback.route';
import loginRouter from './routes/login.route';
import {errorMiddleware} from "./middlewares/errors.middleware";
import https from 'https';
import {connect_db} from "./utils/mongo.util";
import {userMiddleware} from "./middlewares/user.middleware";

const app = express();
app.use(headersMiddleware);
app.use(loggerMiddleware);
app.use(bp.json());
app.use(callbackRouter.route, callbackRouter.router);
app.use(loginRouter.route, loginRouter.router);
app.use(authMiddleware);
app.use(userMiddleware);
routers.forEach((router) => {
        app.use(router.route, router.router);
});
app.use(errorMiddleware);

if(env.PRODUCTION === 'true') {
    connect_db('spotifine');
} else {
    connect_db('cypress');
}

const port = env.SF_BACKEND_PORT || 66666;

const server = https.createServer({
    key: fs.readFileSync('../lib/https_credentials/server.key', 'utf8'),
    cert: fs.readFileSync('../lib/https_credentials/server.cert', 'utf8')
}, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});

export default app;