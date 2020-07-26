var readline = require('readline');

var input = readline.createInterface({
input: process.stdin
});

const userInput = [];

input.on('line', function(values){
userInput.push(values);
})

input.on('close', function(){
console.log(cuberoot(userInput));
})

function cuberoot(data){
  var cube;
  //var num=data;
  var l=data;
  cube= l*l*l;
  return cube;
}
