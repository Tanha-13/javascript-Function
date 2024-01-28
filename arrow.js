const user = {
  userName: "Nusrat",
  price: 999,

  // to refer current context, this keyword is used. this keyword is not used in arrow function.
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.userName = 'Sam';
// user.welcomeMessage();
// console.log(this); // output: {}.
// info: In node environment, this refers to empty object. In browser, it prints window object. this only works in object not in functions.

// function chaiCoffee(){
//     let userName = 'nusrat';
//     console.log(this.userName); // undefined
// }
// chaiCoffee()

// arrow function
// const person = function(){
//     let userName = 'Nusrat';
//     console.log(this.userName);
// }
//declaration
const person = () => {
  let userName = "Nusrat";
  console.log(this.userName); // undefined
};
// person();

// todo: arrow function vs function
// syntax
// () => {}
// explicit return
// const addTwo = (num1,num2) => {
//  return num1+num2;
// }
// implicit return
// const addTwo = (num1,num2) => num1+num2;

// wrapping around curly braces, you need to write return keyword. But if you wrap using parenthesis, there is not to write return keyword.
// const addTwo = (num1,num2) => (num1+num2);

// return object
// const addTwo = (num1,num2) => {userName: 'nusrat'}; //?wrong way
const addTwo = (num1,num2) => ({userName: 'nusrat'});


console.log(addTwo(3,4));