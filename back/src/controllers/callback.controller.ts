import {Request, Response, NextFunction} from 'express';
import {authCodeGrant} from '../services/auth.service';
import {ISpotifyAuthToken} from '../interfaces';
import {ErrorHandler} from "../utils/error.util";

export const callback_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: ISpotifyAuthToken = await authCodeGrant(<string> req.headers.code);
        if (!token) throw new ErrorHandler(400, 'No code found in header');
        res.send(token);
    } catch (e) {
        next(e);
    }
}
