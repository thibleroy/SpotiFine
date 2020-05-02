import {METHOD, Method} from "./interfaces";
const at = 'BQA3sBywaM8P9T9AgVcKiU9YAFseqpHdeQFItxnVm_RC9nGIvuRwL3gMIyK6fW2kBChM5seUVdx91Mz57hWQoXVhZ96vPQucOcfoxhFYulpL7WZ2exyPc0gJys24HmlxUDPkDUmMyt6S9KaBUKPLLxrpVT8jBp8eXOj9NOhTOuiVI3qni71CLw'
const method_factory = (name: string, route: string, json?: any) => {
    return () => {
            return cy.request({
                url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/${route}/`,
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