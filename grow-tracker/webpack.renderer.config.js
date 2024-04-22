const rules = require('./webpack.rules');

rules.push({
  test: /\.(scss)$/,
  use: [
    { loader: 'style-loader' }, 
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
  ]
});

rules.push({
  test: /\.(png|jpe?g|gif|ico|svg)$/,
    use: [{ loader: "file-loader" }]
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
