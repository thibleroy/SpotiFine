import {Request, Response, NextFunction} from 'express';
import {get_artists} from "../services/artists.service";
import {ErrorHandler} from "../utils/error.util";

export const artists_get_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const artists = await get_artists(req.params.id);
        if (artists) res.send({value: artists});
        else throw new ErrorHandler(500, 'db error');
    } catch (e) {
        next(e);
    }
}

export const artists_post_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.send({value: true});
    } catch (e) {
        next(e);
    }
}

export const artists_put_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.send({value: true});
    } catch (e) {
        next(e);
    }
}

export const artists_delete_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.send({value: true});
    } catch (e) {
        next(e);
    }
}
