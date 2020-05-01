import {NextFunction, Request, Response} from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,code,state,access_token,refresh_token');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
}