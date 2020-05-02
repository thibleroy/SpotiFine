import {Request, Response, NextFunction} from 'express';
import {deleteUser, getUser, postUser} from "../services/user.service";
import {ErrorHandler} from "../utils/error.util";
import {userErrors} from "../../../lib/wording/back/error.wording";

export const userGetController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const user = await getUser(<string> req.query.spotify_id);
            if (user)  res.send({value: user});
            else throw new ErrorHandler(404, userErrors.NOT_FOUND);
        } else {
            throw new ErrorHandler(400, userErrors.BAD_REQUEST_QUERY);
        }
    } catch (e) {
        next(e);
    }
}

export const userPostController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const existing_user = await getUser(<string> req.query.spotify_id);
            if (!existing_user){
                const user = await postUser(<string> req.query.spotify_id);
                res.send({value: user});
            }
            else throw new ErrorHandler(409, userErrors.ALREADY_EXISTS);
        } else {
            throw new ErrorHandler(400, userErrors.BAD_REQUEST_QUERY);
        }
    } catch (e) {
        next(e);
    }
}

export const userDeleteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query.spotify_id) {
            const user = await deleteUser(<string> req.query.spotify_id);
            if (user) res.send({value: user});
            else throw new ErrorHandler(404, userErrors.NOT_FOUND);
        } else {
            throw new ErrorHandler(400, userErrors.BAD_REQUEST_QUERY);
        }
    } catch (e) {
        next(e);
    }
}