import {env} from '../../lib/env'
import express from 'express';
import bp from 'body-parser';
import {loggerMiddleware} from './middlewares/logger.middleware'
import {set_headers} from './middlewares/headers.middleware'
import {routers} from './routes/index.route';
import {error_handler, } from "./middlewares/errors.middleware";
const app = express();
app.use(set_headers);
app.use(loggerMiddleware);
app.use(bp.json());
routers.forEach((router) => {
    app.use(router.route, router.router);
});
app.use(error_handler);
app.listen(env.SF_BACKEND_PORT, function () {
    console.log('App listening on port '+ env.SF_BACKEND_PORT);
});
export default app;
