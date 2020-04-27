import {Request, Response, NextFunction} from 'express';
import {get_user} from "../services/user.service";

export const user_controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await get_user();
        res.send({value: user});
    } catch (e) {
        next(e);
    }
}
