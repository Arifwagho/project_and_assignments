#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const guessedRanNum = Math.floor(Math.random() * 6 + 1);

const asking = await inquirer.prompt([
  {
    name: "userGivenum",
    type: "number",
    message: "Please Enter Your Number to Guess Range 1-6: ",
  },
]);

if (guessedRanNum === asking.userGivenum){

    console.log(chalk.green(("Congratulations You Guessed accurate Number ....WAO")));
    
}
else {console.log("Not Matched try Again.....");
}