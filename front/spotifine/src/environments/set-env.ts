import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './../../src/environments/environment.ts';
// Load node modules
import {env} from '../../../../lib/env'
// `environment.ts` file structure
const envConfigFile = `export const environment = {
   SF_BACKEND_ADDR_DEV: '${env.SF_BACKEND_ADDR_DEV}',
   SF_BACKEND_ADDR_PROD: '${env.SF_BACKEND_ADDR_PROD}',
   SF_BACKEND_PORT: ${env.SF_BACKEND_PORT},
   SPOTIFY_CLIENT_ID: '${env.SPOTIFY_CLIENT_ID}',
   SPOTIFY_CLIENT_SECRET: '${env.SPOTIFY_CLIENT_SECRET}',
   SPOTIFY_API_URI: '${env.SPOTIFY_API_URI}'
};
`;

console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
});