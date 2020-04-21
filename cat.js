const shell = require('shelljs');
const args = process.argv.slice(2);
const src = args[0];
res = shell.cat(src);
process.stdout.write(res.stdout);
