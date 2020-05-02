import {Request, Response, NextFunction} from "express";
import {refreshAccessToken} from '../services/token.service';
import {ErrorHandler} from "../utils/error.util";
import {tokenErrors} from "../../../lib/wording/back/error.wording";
export const tokenController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const refresh_token = req.headers.refresh_token;
        if (!refresh_token) {
            throw new ErrorHandler(400, tokenErrors.BAD_REQUEST_HEADERS);
        }
        const new_access_token = await refreshAccessToken(<string> refresh_token);
        res.send(new_access_token);
    } catch (e){
        next(e);
    }
}