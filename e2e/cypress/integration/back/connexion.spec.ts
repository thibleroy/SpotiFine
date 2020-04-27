describe('connexion', () => {

    it('should connect to db', async() => {
        cy.request({
            url: 'https://localhost:12345/artists',
            method: 'GET'
        });
    });

})