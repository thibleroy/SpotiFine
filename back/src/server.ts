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
/**
 * Import routers (used for auth process)
 */
import callbackRouter from "./routes/callback.route";
import loginRouter from "./routes/login.route";

/**
 * Import routers (used for app features)
 */
import app_routers from "./routes/index.route";

/**
 * following call order is important
 */
const app = express();
app.use(headersMiddleware);
app.use(loggerMiddleware);
app.use(bp.json());
app.use(callbackRouter.route, callbackRouter.router);
app.use(loginRouter.route, loginRouter.router);
app.use(authMiddleware);
app.use(userMiddleware);
app_routers.forEach((router) => {
    app.use(router.route, router.router);
});
app.use(errorMiddleware);
export default app;
