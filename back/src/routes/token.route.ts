import {Router} from 'express';
import {tokenController} from '../controllers/token.controller';

const router = Router();

router.get('/', tokenController);

export default {route: '/token', router: router};
