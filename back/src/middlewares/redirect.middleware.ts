import {NextFunction, Request, Response} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    if (!req.secure) {
        res.redirect(`https://${req.headers.host}/`)
    } else return next();
}
