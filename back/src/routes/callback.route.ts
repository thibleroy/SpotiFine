import {Router} from "express";
import {callback_controller} from "../controllers/callback.controller";

const router = Router();

router.get('/', callback_controller);

export default {route: '/callback', router: router};
