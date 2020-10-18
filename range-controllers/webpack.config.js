const path = require('path');

module.exports = {
    mode: 'developement',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}