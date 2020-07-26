
var readline = require('readline');

var input = readline.createInterface({
input: process.stdin
});

const userInput = [];

input.on('line', function(values){
userInput.push(values);
})

input.on('close', function(){
     var num=parseInt(userInput[0]);
  var a=[];
  for( var i=1;i<=3;i++)
  {
    a.push(i*num);
  }
  console.log(a.join(" "));

})
 