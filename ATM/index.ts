#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 1234;

let myOperation = await inquirer.prompt({
  name: "pin",
  message: "Enter Your Pin .... : ",
  type: "number",
});
if (myOperation.pin === myPin) {
  console.log("Correct Pin ....");

  let amountWithdraw = await inquirer.prompt({
    name: "operation",
    message: "What Do You Want ???",
    type: "list",
    choices: ["withdrwa", "Balance Inquiry"],
  });

  if (amountWithdraw.operation === "withdrwa") {
    let amountToBeOut = await inquirer.prompt({
      name: "amount",
      message: "Enter Amount You Want To Wthdraw : ",
      type: "number",
    });

    if (myBalance >= amountToBeOut.amount) {
      myBalance -= amountToBeOut.amount;
      console.log(
        chalk.green("Congratulations You Withdraw : " + amountToBeOut.amount)
      );

      console.log(chalk.yellow("Your Remaining Balabce is : " + myBalance));
    } else {
      console.log(chalk.white.bgBlue("Your Current Balance is less than withdraw amount "));
    }
  } else if (amountWithdraw.operation === "Balance Inquiry") {
    console.log(chalk.bgGreen("Your Balance is : ",myBalance));
  }
} else {
  console.log("Incorrect Pin");
}
