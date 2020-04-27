module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true },
                excludeAfterRemap: false,
                enforce: 'post',
                include: require('path').join(__dirname, '..', 'front', 'spotifine', 'src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/,
                    /(ngfactory|ngstyle)\.js/
                ]
            }
        ]
    }
};