import {Request, Response, NextFunction} from "express";
import {getAuthURL} from '../services/auth'

export const login_controller = async(req: Request, res: Response, next: NextFunction) => {
    try{
       const ic: string = await getAuthURL();
       console.log('ic', ic);
       res.send(ic);
    } catch (e) {
        res.sendStatus(500) && next(e);
    }
}
