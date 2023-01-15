//String Methods

let string = 'I am a web 3.0 developer. My stack includes React and Hardhat'

//startsWith
// will log the item at index[0] in 'string' var which
//will be 'I'
//The method evaluates to true or false depending on if the
//argument passed coincides with argument passed
console.log(string.startsWith('I'))

//endsWith
// will log the item at the last index in 'string' var which
//will be 'Hardhat'
//The method evaluates to true or false depending on if the
//argument passed coincides with argument passed
console.log(string.endsWith('Hardhat'))

//includes
//checks if argument passed is present in string
//evaluates to true or false depending on whether
//value is present or not
console.log(string.includes('stack'))

//numberMethods

//isFinite
//checks if number is finite
//evalutes to true or false
console.log(isFinite(6))

//toString
//converts numbers to strings
console.log(('123').toString())

//valueOf
//number types in JS are of two types,
//primitives and objects
//valueOf converts objects to primitives
console.log((123).valueOf())