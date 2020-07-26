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
    var num=userInput[0].split(" ");
    var a=parseInt(num[0]);
    var b=parseInt(num[1]);
    var c=parseInt(num[2]);
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);      // right
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    console.log(result.toFixed(2));
    console.log(result2.toFixed(2));
});
