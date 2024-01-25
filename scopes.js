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
//   console.log('Inner value of a is ',a);
//   var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

// info: scopes are different in node environment and browser.


//
function one(){
    const userName = 'tanha';
    
    // this functions global scope is one.
    //info: In nested functions, child variables can access parent variables.
    function two(){
        const website = 'youtube';
        console.log(userName);
    }
    // console.log(website);

    two();
}
// one();

if(true){
    const userName = 'nusrat';
    if(userName === 'nusrat'){
        const website = 'youtube';
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

//interesting

console.log(addOne(5));
function addOne(num){
    return num+1;
}
// addOne(5);

//addTwo is a expression for function
console.log(addTwo(5)); //?ReferenceError: cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}
// addTwo(5);