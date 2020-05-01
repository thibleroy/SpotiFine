import {Router} from "express";
import {artistsDeleteController, artistsGetController, artistsPostController, artistsPutController, allArtistsGetController} from "../controllers/artists.controller";

const router = Router();

router.get('/:id', artistsGetController);
router.get('/', allArtistsGetController)
router.post('/',  artistsPostController);
router.put('/:id', artistsPutController);
router.delete('/:id', artistsDeleteController);

export default {route: '/artists', router: router};
