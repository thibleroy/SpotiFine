import {Request, Response, NextFunction} from "express";
import {authCodeGrant} from '../services/auth';

export const callback_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('code', req.headers.code);
        const token: SpotifyToken = await authCodeGrant(<string> req.headers.code);
        res.send(token);
    } catch (e) {
        res.sendStatus(500) && next(e);
    }
}
