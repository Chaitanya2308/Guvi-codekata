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
  var largest;
  var a=data[0];
  var b=data[1];
  var c=data[2];
  if(a>b)
  {
    largest=a;
  }
  else
  {
    largest=b;
  }
  if(c>largest){
    largest=c;
  }
  return largest;
}
