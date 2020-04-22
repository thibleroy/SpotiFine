import {Response} from "express";

export class ErrorHandler extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const handleError = (err: ErrorHandler, res: Response) => {
    console.error('error handled', err);
    const { statusCode, message } = err;
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
