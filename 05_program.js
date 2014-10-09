String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(err, list){
    for(var i=0; i<list.length; i++){
        if(list[i].endsWith("."+extension)){
        console.log(list[i]);
        }
    }
});



