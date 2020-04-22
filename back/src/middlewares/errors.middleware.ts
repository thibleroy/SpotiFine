import {ErrorHandler, handleError} from "../utils/error.util";
import {NextFunction, Request, Response} from "express";

export const error_handler = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    console.log('handled by handler !')
    handleError(err, res);
}