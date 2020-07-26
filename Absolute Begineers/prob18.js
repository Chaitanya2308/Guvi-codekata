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
   if(n>12 || n===0)
   {
       console.log("Error");
   }
   else
   {
   if(n ==1 ||n==3 || n==5 || n==7 || n==8 || n==10 || n==12)
   {
       console.log("31")
   }
   else
   {
       if(n==2)
       {
           console.log("28")
       }
        else
        {
       console.log("30")
        }
   }
   }
   
});


