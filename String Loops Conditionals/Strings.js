Ejercicios Strings, Loops, Conditionals -

ex.1 - Strings
//Exercise: Identify yourself, who are you?

//a.- Define a string var with your name
//b.- Now, show your name in console terminal.

var name="Oscar"
console.log(name)

//c) Fine, now, define a var with your age and show your age and name also using the console

var name="Oscar"
var age="26"
console.log(name + " " + age)

//d) Pass this vars as parameters in a function that shows them on the console

var showMyData=function(name, age) {
	console.log(name, age);
}

showMyData("Oscar", 26)

//e) Now, show your info with a pretty presentation message

var showMyData=function(name, age) {
	console.log("My name is"+" "+ name + " " + "and I'm "+ age+ " "+ "years old.");
}

showMyData("Oscar", 26)

//f) Add a new parameter to the function for your current city, Can you RETURN the updated presentation message?

var myData = showMyData("Oscar", 25, "barcelona");
