import {ErrorHandler, handleError} from "../utils/error.util";
import {NextFunction, Request, Response} from "express";

export const errorMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    console.log('err', err);
    handleError(err, res);
}
