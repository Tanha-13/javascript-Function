//let,var,const
// let a = 10;
// const b = 20;
// var c = 30;

//info: {} - scope. When curly braces comes with function or if-else, it becomes the scope of that program(function or if-else). Don't blunder it will object declarations.

//info: var is global scoped.
// var c = 300;

// block scope
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log('Inner value of a is ',a);
//   var c = 30;
}
console.log(a);
// console.log(b);
// console.log(c);

// info: scopes are different in node environment and browser.
