import {ApiRoute} from './interfaces';
import {cleanDB, get_methods, verifyBody, verifyCode} from './utils';

export const test_route = (route: string) => {
    let body = {}
    let methods = get_methods(route, ['GET', 'POST', 'DELETE']);
    let apiRoute: ApiRoute = {route: route, methods: methods}
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
                        break;
                    case 'POST':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_('', body).should((res) => {
                                verifyCode(res, 200);
                            });
                        });
                        break;
                    case 'PUT':

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

