import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//    12345 === 1234 - false
if (PinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdrow", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrow") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        //=, -=, +=
        myBalance -= amountAns.amount;
        console.log("ypur remaning balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("yourbalance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
