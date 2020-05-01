import {METHOD, Method} from "./interfaces";
import {Artists} from "../../../back/src/models/artists.model";
const at = 'BQCdMV6Yui7zMmPCZ241g5Y2UZ1WkG5-de3l2uIb6riF3j6Vz-JJLaLZj6mLTdK2p53jfpm3lolDLKOkUv7pAZgvHE-vDk7axDsAWll3erjbzmjB0jfOU-3GLNlrddrOHUAcx3ndDDovdFbtwXqrToXopcf9knf6kRxtsYcUAVDOVTsw7mw5ww'
const method_factory = (name: string, route: string, json?: any) => {
    return () => {
            return cy.request({
                url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/${route}`,
                qs: {
                    spotifyId: Cypress.env('SPOTIFY_USER_ID')
                },
                method: name.toUpperCase(),
                failOnStatusCode: false,
                headers: {
                    access_token: at
                },
                body: json
            });
    }
}

export const get_methods = (route: string, methods: METHOD[], json?: any): Method[] => {
    let res = [];
    methods.forEach((m) => {
        res.push({
            name: m,
            method_: method_factory(m, route, json)
        });
    })
    return res;
}
export const verifyCode = (res: Cypress.Response, statusCode: number) => {
    expect(res.status).to.eq(statusCode);
}
export const verifyBody = (res: Cypress.Response, body: any, route: string) => {
    const value = res.body.value;
    expect(value[route]).to.deep.eq(body);
}