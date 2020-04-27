require('cypress-watch-and-reload/plugins');
module.exports = (on, config) => {

     require('@cypress/code-coverage/task')(on, config);
     return config;
}
