var readline = require('readline');

var input = readline.createInterface({
input: process.stdin
});

const userInput = [];

input.on('line', function(values){
userInput.push(values);
})

input.on('close', function(){
console.log(sum(userInput));
})

function sum(data){
  var sum=0;
  //var num=data;
  var l=data[0];
  var b=data[1];
  sum= parseInt(l)+parseInt(b);
  return sum;
}