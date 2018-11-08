const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('bootstrap_starter_template.pug');

// Render a set of data
console.log(compiledFunction());
