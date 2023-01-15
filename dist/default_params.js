"use strict";

//Default parameters hard code arguments within
//function prototypes

function params() {
	var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 13;

	console.log(value);
}

params();