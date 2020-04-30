import {ApiRoute} from './interfaces';
import {get_methods, verifyBody, verifyCode} from './utils';

export const test_route = (route: string) => {
    let body = {}
    let methods = get_methods(route, ['GET', 'POST', 'DELETE']);
    let apiRoute: ApiRoute = {route: route, methods: methods}
    describe('init test', () => {
        it("Let's begin!", () => {
            cy.fixture(route).then((json) => {
                methods = get_methods(route, ['GET', 'POST', 'DELETE'], json);
                apiRoute = {route: route, methods: methods};
                body = json;
            });
        });
    });
    describe(apiRoute.route, () => {
        before(() => {
            const fun = () => {
                apiRoute.methods.filter((m) => m.name === 'DELETE')[0].method_().should((res) => {
                    if (res.status !== 200) return;
                    else fun();
                });
            }
            fun();
        })
        beforeEach(() => {
            apiRoute.methods.filter((m) => m.name === 'DELETE')[0].method_();
        });
        apiRoute.methods.forEach((method) => {
            console.log(method);
            context(method.name, () => {
                switch (method.name) {
                    case 'GET':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_();
                            method.method_().should((res) => verifyCode(res, 200));
                        });
                        it('error 404', () => {
                            method.method_().should((res) => verifyCode(res, 404))
                        });
                        it('verifies body is fine', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_();
                            method.method_().should((res) => verifyBody(res, body, apiRoute.route));
                        })
                        break;
                    case 'POST':
                        it('status 200 + body returned is ok', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_().should((res) => {
                                verifyCode(res, 200);
                                verifyBody(res, body, apiRoute.route);
                            });
                        });
                        it('status 409', () => {
                            method.method_();
                            method.method_().should((res) => verifyCode(res, 409));
                        });
                        break;
                    case 'PUT':

                        break;
                    case 'DELETE':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_();
                            method.method_().should((res) => verifyCode(res, 200));
                        });
                        it('status 404', () => {
                            method.method_();
                            method.method_().should((res) => verifyCode(res, 404));
                        });
                        break;
                    default: break;
                }
            });
        });
    });
}

