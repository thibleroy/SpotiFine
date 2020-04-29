import {Request, Response, NextFunction} from 'express';
import {delete_user, get_user, post_user} from "../services/user.service";
import {ErrorHandler} from "../utils/error.util";

export const user_get_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const user = await get_user(<string> req.query.spotify_id);
            if (user)  res.send({value: user});
            else throw new ErrorHandler(404, 'User not found');
        } else {
            throw new ErrorHandler(401, 'No spotify_id found in query');
        }
    } catch (e) {
        next(e);
    }
}

export const user_post_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const existing_user = await get_user(<string> req.query.spotify_id);
            if (!existing_user){
                const user = await post_user(<string> req.query.spotify_id);
                res.send({value: user});
            }
            else throw new ErrorHandler(409, 'User already exists');
        } else {
            throw new ErrorHandler(401, 'No spotify_id found in query');
        }
    } catch (e) {
        next(e);
    }
}

export const user_delete_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const user = await delete_user(<string> req.query.spotify_id);
            if (user) res.send({value: user});
            else throw new ErrorHandler(404, 'User not found');
        } else {
            throw new ErrorHandler(401, 'No spotify_id found in query');
        }
    } catch (e) {
        next(e);
    }
}