function getAdd() {
  let x = 1;
  console.log("outer function");
  return function () {
    x = x + 1;
    console.log("inner function");
    return x;
  };
}

console.log(getAdd()); //this just returns an anonymous function, aka the inner function

const add = getAdd(); //there is only ONE instance of the getAdd() function, therefore there is only ONE instance of x, therefore it is always that ONE instance of x that gets updated by the inner function calls (add() is the inner function)

//getAdd() is DONE running after the add variable is initialized, it does not 'perpetually' run. getAdd() RETURNS an anonymous function, therefore it is DONE running

//when add() is called, it is running the inner anonymous function, but it is operating in a contained scope, so it persists the state of x within that contained scope. The value of x persists, but it is only accessible within that contained scope, not outside of it; this contained scope protects it from being changed from outside.
//This is the definition of a closure- the add() function 'closes' over the x variable. add() is the only function that can change the value of x
//"Closure is created when a child function keeps the environment of the parent scope EVEN AFTER the parent function is finished executing"

console.log(add());
console.log(add());
console.log(add());


//the below code functions the same, but operates in a global scope

console.log("\n");

let y = 1;
function add1() {
  y = y + 1;
  return y;
}

console.log(add1());
console.log(add1());
console.log(add1());
console.log(add1());
