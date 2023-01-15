'use strict';

//declared variable name
var name = 'montana';
//function makeTitleCase that converts strings into upper case
function makeUpperCase(string) {
	var word = string.toString();
	word.toUpperCase();
	return word;
}

//declared variable 'template' to hold formatted string literal
//used backticks to allow value of 'template' to hold multiple lines
//the '$' is allows the passing of variables into the string literal
//called function upperTitleCase and passed 'name'
var template = '<h3>Hello ' + makeUpperCase(name) + '</h3>\n\t\t\t\t<p>You are currently learning JavaScript ES6</p>';
//get id of div tag to pass variable 'template' into
document.getElementById('template').innerHTML = template;