import {Router} from "express";
import {account_controller} from '../controllers/account';

const router = Router();

router.get('/', account_controller);

export default {route: '/account', router: router};
