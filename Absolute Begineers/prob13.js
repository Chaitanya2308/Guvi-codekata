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
  var small=0;
  var num=data[0].split(" ");
  var a=num[0];
  var b= num[1];
  if(a<b)
  {
    small=a;
  }
  else
  {
    small=b;
  }
  return small;
}
