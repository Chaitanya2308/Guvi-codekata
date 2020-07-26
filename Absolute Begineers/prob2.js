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
})

function area(data){
  var area;
  //var num=data;
  var l=data[0];
  var b=data[1];
  area= l*b;
  return area;
}
