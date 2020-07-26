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
  if(data===0)
    return "Zero";
  else
  {
    if(data%2===0)
    {
      return "Even";
    }
    else
    {
      return "Odd";
    }
  }
}
