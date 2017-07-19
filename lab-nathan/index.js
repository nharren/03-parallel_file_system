'use strict';

const fp = require('./lib/fp.js');

fp.map(process.argv.slice(2), a => console.log(a.toUpperCase()));