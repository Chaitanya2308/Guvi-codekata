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
  var r=data;
  area= (3.1425*2*r).toFixed(2);
  return area;
}
