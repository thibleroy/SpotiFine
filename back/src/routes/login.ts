import {Router} from "express";
import {login_controller} from "../controllers/login";

const router = Router();

router.get('/', login_controller);

export default {route: '/login', router: router};
