import {Request, Response, NextFunction} from 'express';
import {authCodeGrant} from '../services/auth.service';
import {ErrorHandler} from "../utils/error.util";
import {callbackErrors} from "../../../lib/wording/back/error.wording";

export const callbackController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await authCodeGrant(<string> req.headers.code);
        if (!token) throw new ErrorHandler(400, callbackErrors.BAD_REQUEST_HEADERS);
        res.send(token);
    } catch (e) {
        next(e);
    }
}
