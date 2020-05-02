import {NextFunction, Request, Response} from "express";
import env from "../../../lib/env";

export default async (req: Request, res: Response, next: NextFunction) => {
    if (!req.secure) {
        return res.redirect(['https://', (<string> req.headers.host).split(':')[0], ':', env.SF_BACKEND_HTTPS_PORT, req.originalUrl].join(''));
    }
    next();
}
