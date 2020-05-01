import {Request, Response, NextFunction} from "express";
import {getAuthURL} from '../services/auth.service'
import {ErrorHandler} from "../utils/error.util";
import {loginErrors} from "../../../lib/wording/back/error.wording";

export const loginController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const state = req.headers.state;
        if (!state) {
            throw new ErrorHandler(400, loginErrors.BAD_REQUEST_HEADERS);
        }
        const ic: string = await getAuthURL(<string> state);
        res.send(ic);
    } catch (e){
        next(e);
    }

}
