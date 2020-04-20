import {Request, Response, NextFunction} from "express";
import {getAccount} from '../services/account';

export const account_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_token = req.headers.authorization
        console.log('usertoken', user_token);
        const user_account = await getAccount(<string> user_token);
        res.send(user_account);
    } catch (e) {
        res.sendStatus(500) && next(e);
    }
}
