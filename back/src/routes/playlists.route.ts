import {Router} from "express";
import {
    playlistDeleteController,
    playlistGetController,
    playlistPostController,
    playlistPutController,
    playlistsGetController
} from "../controllers/playlists.controller";

const router = Router();

router.get('/:id', playlistGetController);
router.post('',  playlistPostController);
router.put('/:id', playlistPutController);
router.delete('/:id', playlistDeleteController);
router.get('', playlistsGetController)
export default {route: '/playlists', router: router};
