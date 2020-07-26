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
  var num=data;
  var faren= ((data*(9/5))+32).toFixed(2);
  return faren;
}
