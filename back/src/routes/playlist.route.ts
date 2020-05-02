import {Router} from "express";
import {playlistDeleteController, playlistGetController, playlistPostController, playlistPutController} from "../controllers/playlist.controller";

const router = Router();

router.get('/', playlistGetController);
router.post('/',  playlistPostController);
router.put('/', playlistPutController);
router.delete('/', playlistDeleteController);

export default {route: '/playlist', router: router};
