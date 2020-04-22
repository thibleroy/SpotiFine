import http, {RequestOptions, IncomingMessage} from 'http';
import https, {RequestOptions as SecuredRequestOptions} from 'https'
export const make_request = (opts: RequestOptions): Promise<string> => {
    return new Promise((resolve, reject) => {
        const req = http.request(opts);
        req.on('response', (res: IncomingMessage) => {
           let buffer = '';
           res.on('data', (chunk: string) => {
               buffer += chunk;
           });
           res.on('end', () => {
               resolve(buffer);
           })
        });
        req.on('error', (err: Error) => {
            reject(err);
        });
        req.end()
    });
}
export const make_secured_request = (opts: SecuredRequestOptions): Promise<string> => {
    return new Promise((resolve, reject) => {
        const req = https.request(opts);
        req.on('response', (res: IncomingMessage) => {
            let buffer = '';
            res.on('data', (chunk: string) => {
                buffer += chunk;
            });
            res.on('end', () => {
                resolve(buffer);
            })
        });
        req.on('error', (err: Error) => {
            reject(err);
        });
        req.end()
    });
}