//function declaration/definition
function sayMyName() {
  console.log("N");
  console.log("U");
  console.log("S");
  console.log("R");
  console.log("A");
  console.log("T");
}

// sayMyName - Reference
// sayMyName() - calling and execution
// sayMyName();

// Validation
// function addTwoNumbers(number1, number2) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     console.log(number1 + number2);
//   } else {
//     console.log("Provide number for addition");
//   }
// }
// addTwoNumbers(3, "4");

//todo: arguments vs parameters
//info: inputs inside the parenthesis while declaring/defining an function are called parameters. inputs inside the parenthesis while calling/executing the function are called arguments.

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
  // will not execute any code after return in function
  console.log("hello world");
}
// addTwoNumbers(3, 4);
const result = addTwoNumbers(3, 4);
// console.log(`Result: ${result}`);

function logInUserMessage(userName = "user"){
    // if(userName === undefined){
    if(!userName){
        return 'Please enter a username';
    }

    return `${userName} logged in successfully`;
}
// const message = logInUserMessage('Nusrat');
const message = logInUserMessage();
// console.log(message);

// todo: rest operator vs spread operator
// rest operator
// function calculateCartPrice(...number){
//   return number;
// }
function calculateCartPrice(val1,val2,...number){
  return number;
}
console.log(calculateCartPrice(200,300,400,500));