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
    function factorial(n)
    {
        if(n===0)
        {return 1;
        }
        else{
            return n*factorial(n-1);
        }
      
    }
    var ans=factorial(n);
  console.log(ans);

  //end-here
});
