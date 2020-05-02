import {Router} from "express";
import {artistsDeleteController, artistsGetController, artistsPostController, artistsPutController} from "../controllers/artists.controller";

const router = Router();

router.get('/', artistsGetController);
router.post('/',  artistsPostController);
router.put('/', artistsPutController);
router.delete('/', artistsDeleteController);

export default {route: '/artists', router: router};
