import {METHOD, Method} from "./interfaces";
const method_factory = (name: string, route: string) => {
    return () => {
        return cy.api({
            url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/${route}`,
            qs: {
                spotify_id: Cypress.env('SPOTIFY_USER_ID')
            },
            method: name.toUpperCase(),
            failOnStatusCode: false
        });
    }
}

export const get_methods = (route: string, methods: METHOD[]): Method[] => {
    let res = [];
    methods.forEach((m) => {
        res.push({
            name: m,
            method_: method_factory(m, route)
        });
    })
    return res;
}
export const verify_code = (res: Cypress.Response, statusCode: number) => {
    expect(res.status).to.eq(statusCode);
}
