var fs = require('fs');

var filename = process.argv[2];

var buf = fs.readFileSync(filename);

console.log((buf.toString().split("\n").length-1));

