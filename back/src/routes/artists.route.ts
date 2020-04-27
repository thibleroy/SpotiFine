import {Router} from "express";
import {artists_get_controller,artists_delete_controller, artists_post_controller, artists_put_controller} from "../controllers/artists.controller";

const router = Router();

router.get('/', artists_get_controller);
router.post('/',  artists_post_controller);
router.put('/', artists_put_controller);
router.delete('/', artists_delete_controller);

export default {route: '/artists', router: router};
