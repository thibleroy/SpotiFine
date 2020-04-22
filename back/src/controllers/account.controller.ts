import {Request, Response, NextFunction} from "express";
import {getAccount} from '../services/account.service';
import {ErrorHandler} from "../utils/error.util";
export const account_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const access_token = req.headers.access_token;
        if (!access_token){
            throw new ErrorHandler(400, "No access_token found in header");
        }
        let user_account = await getAccount(<string> access_token);
        res.send(user_account);
    } catch (e) {
        console.log('ici 5', e)
        next(e);
    }
}
