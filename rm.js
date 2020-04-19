const shell = require('shelljs');

const args = process.argv.slice(2);
const dir = args[0];

shell.rm('-rf', dir);
