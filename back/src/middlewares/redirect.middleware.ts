import {NextFunction, Request, Response} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    console.log('hey');
    if (!req.secure) {
        return res.redirect(['https://', req.headers.host, req.baseUrl].join(''));
    }
    next();
}
