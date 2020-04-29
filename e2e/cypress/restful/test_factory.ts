import {ApiRoute} from "./interfaces";
import {verify_code} from "./utils";

export const test_route = (apiRoute: ApiRoute) => {
    describe('init test factory', () => {
        it("Let's begin!", () => {});
    })
    describe(apiRoute.route, () => {
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
                            method.method_().should((res) => verify_code(res, 200));
                        });
                        it('error 404', () => {
                            method.method_().should((res) => verify_code(res, 404))
                        });
                        break;
                    case 'POST':
                        it('status 200', () => {
                            method.method_().should((res) => verify_code(res, 200));
                        });
                        it('status 409', () => {
                            method.method_();
                            method.method_().should((res) => verify_code(res, 409));
                        });
                        break;
                    case 'PUT':

                        break;
                    case 'DELETE':
                        it('status 200', () => {
                            apiRoute.methods.filter((m) => m.name === 'POST')[0].method_();
                            method.method_().should((res) => verify_code(res, 200));
                        });
                        it('status 404', () => {
                            method.method_();
                            method.method_().should((res) => verify_code(res, 404));
                        });
                        break;
                    default: break;
                }
            });
        });
    });
}

