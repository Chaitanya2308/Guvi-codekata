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
    var a=parseInt(userInput[0]);
   // var area=((Math.sqrt(3))*(Math.pow(a*2)))*1/4;
    
    var area=((Math.sqrt(3))*a*a)/4;
    console.log(area.toFixed(2));
  //end-here
});
