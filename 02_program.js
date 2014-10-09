var i;
var num;
var sum = 0;

if(process.argv.length > 2){
    for(i=2; i<process.argv.length; i++){
        num = parseInt(process.argv[i]);
        sum += num;
    }
}

console.log(sum);