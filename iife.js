// Immediately Invoked Function Expressions (IIFE)


//info: to remove interaction with global variable. semi colon is mandatory.
// named iife
(function dbConnection() {
  console.log(`DB CONNECTED`);
})();

(
    function one(){
        console.log('DB CONNECTED TWO');
    }
)();

// arrow function
(
    () => {
        console.log(`DB CONNECTED THREE`);
    }
)();

//arrow function with parameter
(
    (userName) => {
        console.log(`DB CONNECTED THREE for ${userName}`);
    }
)('Nusrat');