var path = require('path');
module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
    ,
    module: {
        rules: [
          {
            test: /\.es6$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [
              {
                loader: "babel-loader",
                options: { 
                  camelcase: true, 
                  emitErrors: false, 
                  failOnHint: false
                } 
              }
            ]
          }
        ]
    }
};

