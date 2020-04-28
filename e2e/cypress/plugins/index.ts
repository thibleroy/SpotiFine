module.exports = (on, config) => {
     if (config.env.coverage) require('@cypress/code-coverage/task')(on, config);
     if (config.env.TDD) require('cypress-watch-and-reload/plugins');
     return config;
}
