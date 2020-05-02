import {METHOD, Method} from "./interfaces";
const at = 'BQBvpj2vmIaoqMy8WbXD_nTc7YRNMa5NN_q1QzSOGXtOIwsoUJCstpRzfNHSE4a4BSnHD8NXVvFXfVp0JsGYIJxSKaJ2k8kCtid1U2rkAO7dAF8bT_YZOjLifIvqJ734DnyxKwZDlB4dcAloWZHEXregNYjw7-GmpzUQaHzMUIdy2uz22i52cg'
const method_factory = (name: string, route: string) => {
    return (id: string = '', body: string = '') => {
            return cy.request({
                url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/${route}/${id}`,
                qs: {
                    spotifyId: Cypress.env('SPOTIFY_USER_ID')
                },
                method: name.toUpperCase(),
                failOnStatusCode: false,
                headers: {
                    access_token: at
                },
                body: body
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
export const verifyCode = (res: Cypress.Response, statusCode: number) => {
    expect(res.status).to.eq(statusCode);
}
export const verifyBody = (res: Cypress.Response, body: any, dataName: string) => {
    const value = res.body.value;
    expect(value[dataName]).to.deep.eq(body);
}
export const cleanDB = (methods: Method[]) => {
    methods.filter((m) => m.name === 'GET')[0].method_().should((res) => {
        if (res.status !== 404) {
            const value = res.body.value
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    methods.filter((m) => m.name === 'DELETE')[0].method_(val._id);
                });
            }
            else {
                methods.filter((m) => m.name === 'DELETE')[0].method_(value._id);
            }
        }
    });
}