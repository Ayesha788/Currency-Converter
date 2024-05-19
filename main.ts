#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
  USD: 1,//base currency
  EUR: 0.93,
  GBP: 0.8,
  AUD: 1.52,
  CNH: 7.23,
  NZD: 1.67,
  INR: 83.5,
  PKR: 278.16,
};
let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "AUD", "CNH", "NZD", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "AUD", "CNH", "NZD", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(
  `  ${userAnswer.amount} ${userAnswer.from} is equals to ${convertedAmount} ${userAnswer.to} `
);
