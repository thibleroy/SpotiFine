import {Request, Response, NextFunction} from "express";
import {getAuthURL} from '../services/auth.service'
import {ErrorHandler} from "../utils/error.util";

export const login_controller = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const state = req.headers.state;
        if (!state) {
            throw new ErrorHandler(400, 'No state found in header');
        }
        const ic: string = await getAuthURL(<string> state);
        res.send(ic);
    } catch (e){
        next(e);
    }

}
