import {Router} from 'express';
import {token_controller} from '../controllers/token.controller';

const router = Router();

router.get('/', token_controller);

export default {route: '/token', router: router};
