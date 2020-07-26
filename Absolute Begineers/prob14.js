var readline = require('readline');

var input = readline.createInterface({
input: process.stdin
});

const userInput = [];

input.on('line', function(values){
userInput.push(values);
})

input.on('close', function(){
console.log(simpleintrest(userInput));
})

function simpleintrest(data){
  var intrest;
  var num=data[0].split(" ");
  var p=num[0];
  var t=num[1];
  var r=num[2];
  intrest=((p*t*r)/100).toFixed(2);
  return intrest;
}

