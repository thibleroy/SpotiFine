import {ApiRoute} from './interfaces';
import {cleanDB, get_methods, verifyBody, verifyCode} from './utils';

export const test_route = (route: string, dataName: string) => {
    let body = {}
    let methods = get_methods(route, ['GET', 'POST', 'DELETE', 'PUT']);
    let apiRoute: ApiRoute = {route: route, methods: methods, dataName: dataName}
    describe('Lets begin', () => {
        it("Loading body data", () => {
            cy.fixture(route).then((json) => {
                body = json;
            });
        });
    });
    describe(apiRoute.route, () => {
        beforeEach(() => {
            cleanDB(apiRoute.methods);
        });
        apiRoute.methods.forEach((method) => {
            console.log(method);
            context(method.name, () => {
                switch (method.name) {
                    case 'GET':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body);
                            method.method_().should((res) => verifyCode(res, 200));
                        });
                        it('error 404', () => {
                            method.method_('123456789123').should((res) => verifyCode(res, 404))
                        });
                        it('verifies body is fine', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body).should((resp) => {
                                method.method_(resp.body.value._id).should((res) => verifyBody(res, body, dataName));
                            });
                        })
                        break;
                    case 'POST':
                        it('status 200 + body returned is ok', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body).should((res) => {
                                verifyCode(res, 200);
                                verifyBody(res, body, dataName);
                            });
                        });
                        break;
                    case 'PUT':
                        it('status 200 + body returned is ok', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body).should((res) => {
                                apiRoute.methods.filter((m) => m.name === 'PUT')[0].method_(res.body.value._id, body).should((resp) => {
                                    verifyCode(resp, 200);
                                    verifyBody(resp, body, dataName);
                                });
                            });
                        });
                        it('error 404', () => {
                            method.method_('123456789123', body).should((res) => verifyCode(res, 404))
                        });
                        break;
                    case 'DELETE':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body).should((res) => {
                                method.method_( res.body.value._id).should((res) => verifyCode(res, 200));
                            });
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

