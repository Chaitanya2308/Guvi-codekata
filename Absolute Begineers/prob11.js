// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
    var n=parseInt(userInput[0]);
    var a=[];
    for(var i=1;i<=n;i++)
    {
        a.push(9*i);
    }
  //  var ans = a.join(' ');
    console.log(a.join(' '));
  //end-here
});
