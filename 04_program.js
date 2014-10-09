var fs = require('fs');

var filename = process.argv[2];

var buf = fs.readFile(filename, 'utf-8', function(err, data){
    console.log((data.toString().split("\n").length-1));
});



