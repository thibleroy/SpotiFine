import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './../../src/environments/environment.ts';
// Load node modules
import {env} from '../../../../lib/env'
// `environment.ts` file structure
// const envConfigFile = `export const environment = {
//    SF_BACKEND_ADDR_DEV: '${env.SF_BACKEND_ADDR_DEV}',
//    SF_BACKEND_ADDR_PROD: '${env.SF_BACKEND_ADDR_PROD}',
//    SF_BACKEND_PORT: ${env.SF_BACKEND_PORT},
//    SPOTIFY_CLIENT_ID: '${env.SPOTIFY_CLIENT_ID}',
//    SPOTIFY_CLIENT_SECRET: '${env.SPOTIFY_CLIENT_SECRET}',
//    SPOTIFY_API_URI: '${env.SPOTIFY_API_URI}'
// };
// `;

const make_str_env = (env: any) => {
    let res = '{';
    for (const property in env) {
        (typeof env[property] === "string" ? res +=`${property}: '${env[property]}',\r`: res +=`${property}: ${env[property]}\r,`);
    }
    res += 'production: false';
    return res + '}';
}
console.log('value', make_str_env(env));

const envConfigFile = 'export const environment = ' + make_str_env(env) + ';';

console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
});