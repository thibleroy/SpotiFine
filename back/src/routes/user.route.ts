import {Router} from 'express';
import {user_controller} from '../controllers/user.controller';

const router = Router();

router.get('/', user_controller);

export default {route: '/user', router: router};
