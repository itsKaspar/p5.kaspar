// Maths
const Something = require('./js/Something.js');
const Maths = require('./js/Maths.js');
const Geometry = require('./js/Geometry.js');
const Draw = require('./js/Draw.js');

const modules = {
  Something
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
