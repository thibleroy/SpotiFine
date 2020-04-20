import {env} from '../../lib/env'
import express from 'express';
import bp from 'body-parser';
import {logger} from './middlewares/logger'
import {set_headers} from './middlewares/headers'
import {routers} from './routes';
const app = express();
app.use(set_headers);
app.use(logger);
app.use(bp.json());
routers.forEach((router) => {
    app.use(router.route, router.router);
});
app.listen(env.SF_BACKEND_PORT, function () {
    console.log('App listening on port '+ env.SF_BACKEND_PORT);
});
export default app;
