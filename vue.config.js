var path = require('path')
module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vuecode.js'
  },
}
