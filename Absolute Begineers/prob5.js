var readline = require('readline');

var input = readline.createInterface({
input: process.stdin
});

const userInput = [];

input.on('line', function(values){
userInput.push(values);
})

input.on('close', function(){
console.log(area(userInput));
console.log(area1(userInput));
})

function area(data){
  var area;
  var l=data*1000;
  return l;
}
function area1(data){
  var area;
  var b=data*100000;
  return b;
}
