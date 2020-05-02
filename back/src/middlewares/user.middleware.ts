import {ErrorHandler} from "../utils/error.util";
import {NextFunction, Request, Response} from "express";
import {userErrors} from "../../../lib/wording/back/error.wording";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const spotifyId = req.query.spotifyId;
        if (spotifyId) {
            return next()
        } else throw new ErrorHandler(400, userErrors.BAD_REQUEST_QUERY);
    } catch (e) {
        next(e);
    }
}
