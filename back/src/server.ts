import express from "express";
import bp from "body-parser";

/**
 * Import middlewares
 */

import headersMiddleware from "./middlewares/headers.middleware";
import loggerMiddleware from "./middlewares/logger.middleware";
import authMiddleware from "./middlewares/auth.middleware";
import userMiddleware from "./middlewares/user.middleware";
import errorMiddleware from "./middlewares/errors.middleware";
import redirectMiddleware from './middlewares/redirect.middleware';

/**
 * Import routers
 */

import {app_routers, auth_routers} from "./routes/index.route";
import env from "../../lib/env";

/**
 * following call order is important
 */

const app = express();
app.use(headersMiddleware);
app.use(loggerMiddleware);
app.use(bp.json());
if (env.PRODUCTION) app.use(redirectMiddleware);
auth_routers.forEach((router) => {
    app.use(router.route, router.router);
});
app.use(authMiddleware);
app.use(userMiddleware);
app_routers.forEach((router) => {
    app.use(router.route, router.router);
});
app.use(errorMiddleware);
export default app;
