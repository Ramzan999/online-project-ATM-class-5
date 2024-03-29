import inquirer from "inquirer";
var myBalance = 10000; // Dollar
let myPin = 1997; // Pin Code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let actionAns = await inquirer.prompt([
            {
                name: "action",
                message: "choose paymet method",
                type: "list",
                choices: ["fast cash", "cash withdraw"]
            }
        ]);
        if (actionAns.action === "fast cash") {
            var amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "select your amount",
                    type: "list",
                    choices: ["500", "1000", "3000", "5000", "7000", "10000", "15000"],
                }
            ]);
        }
        else if (actionAns.action === "cash withdraw") {
            var amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
        }
        // myBalance -= amountAns.amount;
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (amountAns.amount > myBalance) {
            myBalance !== amountAns.amount;
            console.log("you have not enough balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
    ;
}
else {
    console.log("Incorrect pin number");
}
