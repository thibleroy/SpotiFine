import {ErrorHandler} from "../utils/error.util";
import {NextFunction, Request, Response} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const spotifyId = req.query.spotifyId;
        if (spotifyId) {
            return next()
        } else throw new ErrorHandler(400, 'No spotify id in query parameters');
    } catch (e) {
        next(e);
    }
}
