const user = {
    userName: 'Nusrat',
    price: 999,
    
    // to refer current context, this keyword is used. this keyword is not used in arrow function.
    welcomeMessage: function(){
     console.log(`${this.userName}, welcome to website`);   
     console.log(this);
    }

}
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


