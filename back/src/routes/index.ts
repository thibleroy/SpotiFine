import auth_router from './auth/auth.route';
import {Express} from "express";

const affect_routes = (app: Express) => {
    app.use('/auth', auth_router)
}

export default affect_routes;