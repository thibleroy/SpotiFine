import {Router} from 'express';
import {user_delete_controller, user_get_controller, user_post_controller} from '../controllers/user.controller';

const router = Router();

router.get('/', user_get_controller);
router.post('/', user_post_controller)
router.delete('/', user_delete_controller)
export default {route: '/user', router: router};
