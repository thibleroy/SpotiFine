import {env} from '../../lib/env'
import express from 'express';
import {Router,Request, Response} from "express";
import bodyparser from 'body-parser';
import Morgan from 'morgan';
export const app = express();
app.use(Morgan('dev'));
app.use(function (req: Request, res: Response, next: any) {
    res.setHeader('Access-Control-Allow-Origin', 'localhost:8100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(bodyparser.json());

const def = Router();

def.get('/', (req: Request, res: Response) => {
    res.json({hello: 'cc !'});
});

app.use('/auth',def)

app.listen(env.SF_BACKEND_PORT, function () {
    console.log('App listening on port '+ env.SF_BACKEND_PORT);
});