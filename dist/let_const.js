'use strict';

//used 'let' keyword to declare variable 'name'
//which is available in the global scope. Methods in the srcipt
// have access to it.
var name = 'Santana';
//declared variable name_2 with 'const', which makes variables
//immutable
var name_2 = 'Buchanan';

//function that changes the value of variable 'name'
function changeName() {
	//declared 'name_3' in local scope of changeName method.
	//the variable 'name-3' cannot be accessed outside this method
	var name_3 = 'Ivy';

	//changed value of name to 'Sanchez'
	name = 'Sanchez';

	//trying to alter value of variable name_2 will throw error,
	//since variables declared with 'const' can't be changed
	// name_2 = 'Eddie'

	//prints changed name to console
	console.log(name);
	console.log(name_2);
	console.log(name_3);
}
//prints name from gobal scope which is not altered by
//changeName method
console.log(name);
//prints unchanged name_2 variable from global scope

//call changeName method
changeName();