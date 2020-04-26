export const me = () => cy.route({
    url: 'https://api.spotify.com/v1/me',
    response: 'fixture:account.json',
    method: 'GET'
});
export const me_playlists = () => cy.route({
    url: 'https://api.spotify.com/v1/me/playlists',
    response: {},
    method: 'GET'
});
export const me_artists = (fixture) => cy.route({
    url: 'https://api.spotify.com/v1/me/top/artists',
    response: `fixture:${fixture}`,
    method: 'GET'
});
