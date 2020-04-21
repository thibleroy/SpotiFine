const publicIp = require('public-ip');

(async () => {
    process.stdout.write(await publicIp.v4());
})();
