import {METHOD, Method} from "./interfaces";
const at = 'BQCRWL5ruKGLe7XavepsPYMzDPkhV2GAgGEDRKQJ9zE1PBgbovaxxnXmY5H7a8AOwCZbdU13qnEUcW7jXUYuPAPycsFOKBXXnqXhcwFvNgSvOpHgRo12IDrovwwUxpQ-hVRjdDnBT9fPvsOC2kcmwYO7voQr_yZmuCF9UNizzRJ3aO9FArILVQ'
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