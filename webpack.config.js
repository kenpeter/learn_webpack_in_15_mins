// path for physical file
var path = require('path');

// lib, etc, export
// so other files can use it.
module.exports = {
	// webpack looks into it at the very beginning.
  entry: './assets/js/index.js',
	// entry vs output
  output: {
		// index.js -> webpack -> bundle.js
    filename: 'bundle.js',
		// ./dist/bundle.js, physical path
    path: path.resolve(__dirname, 'dist')
  },
  // module	
  module: {
		// rule for loader 
    rules: [{
			// match up with js file
      test: /\.js$/,
			// forget node_modules
      exclude: /node_modules/, 
      // load jshint loader
			use: 'jshint-loader'
    }]
  }
};
