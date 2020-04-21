const shell = require('shelljs');

const args = process.argv.slice(2);
const src = args[0];
const target = args[1]
shell.cp('-R', src, target);
