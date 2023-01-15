//spread operator allows a function to take 
//an undefined number of arguments using the 
//'...args' parameter

//created function spreadOp that takes multiple
//undefined arguments
function spreadOp(...args) {

//declared empty array
let values = []

//add arguments received to empty array
values.push(args)

//display output in console
console.log(values)
}

//called 'spreadOp' with multiple arguments
spreadOp(2, 4, 6, 8)