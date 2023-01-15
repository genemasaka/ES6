//A set is a collection of unique values within curly braces

//created empty set
let mySet = new Set(['barter6', 'slime language', 'Jeffry'])

//'add' method is used to add items in the set
mySet.add("Jeffry Williams")
mySet.add({id: 1234, bloodType: 'cold', age: 32})
mySet.add('Atlanta')

//looping through the set
mySet.forEach((value) => console.log(value))
console.log(mySet)

//delete method removes specified values from the set
mySet.delete('Atlanta')

console.log(mySet)

//clear method deletes everythin in the set
mySet.clear()

console.log(mySet)

