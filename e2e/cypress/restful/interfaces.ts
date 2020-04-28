export type METHOD = 'GET'|'POST'|'DELETE'|'PUT';
export interface Method {
    name: METHOD;
    method_: () => Cypress.Chainable<Cypress.Response>
}
export interface ApiRoute {
    route: string;
    methods: Method[]
}