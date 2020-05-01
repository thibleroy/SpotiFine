import {ErrorHandler} from "../utils/error.util";
import {NextFunction, Request, Response} from "express";
import {verifyAuth} from "../services/auth.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const access_token = req.headers.access_token;
        console.log('AT', access_token);
       if (access_token) {
            const auth = await verifyAuth(<string> access_token);
            if (auth) return next();
            else throw new ErrorHandler(401, 'Not authorized');
        } else throw new ErrorHandler(400, 'No token found in headers')
    } catch (e) {
        next(e);
    }
}
