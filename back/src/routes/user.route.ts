import {Router} from 'express';
import {userDeleteController, userGetController, userPostController} from '../controllers/user.controller';

const router = Router();

router.get('/', userGetController);
router.post('/', userPostController)
router.delete('/', userDeleteController)
export default {route: '/user', router: router};
