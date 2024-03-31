#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNum" },
  { message: "Enter Second Number ", type: "number", name: "SecondNum" },
  {
    message: "Select one of operator to perfome Operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.Operator === "Addition"){
    console.log( answer.firstNum + answer.SecondNum)
}
else if (answer.Operator === "Subtraction"){

    console.log(  answer.firstNum - answer.SecondNum)
}

else if (answer.Operator === "Multiplication"){

  console.log(  answer.firstNum * answer.SecondNum)
}

else if (answer.Operator === "Division"){

  console.log(  answer.firstNum / answer.SecondNum)
}

else {console.log("First Choose Operator")}