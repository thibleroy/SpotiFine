export type METHOD = 'GET'|'POST'|'DELETE'|'PUT';
export interface Method {
    name: METHOD;
    method_: (id?: string, body?: any) => Cypress.Chainable<Cypress.Response>
}
export interface ApiRoute {
    route: string;
    methods: Method[];
    dataName: string;
}