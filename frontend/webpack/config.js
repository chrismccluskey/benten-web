const path = require('path');

const paths = {
	source: path.join(__dirname, '../source'),
	build: path.join(__dirname, '../build')
}

const plugins = [];

module.exports = {
	paths,
	plugins,
}