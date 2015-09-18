var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: './public/bundle.js',
    devServer: {
        contentBase: 'public/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.less$/,
                loader: 'style!css?modules!autoprefixer-loader?browsers=last 2 versions!less'
            },
            {
              test: /\.jpg$/,
              loader: "url-loader?limit=10000&minetype=image/jpg"
            }
        ]
    }
};
