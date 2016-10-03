Ejercicios Strings, Loops, Conditionals -

ex.2 - Loops

//Exercise: Counter

//a)We want to do a counter, from 0 to 5.

for (var i = 0  ; i <= 5; i++) {
	 console.log(i);
}

//b)Can you add a message when the count is over?

for (var i = 0; i <= 5; i++) {
	console.log(i); 
		
	}
	console.log("COUNT FINISHED!");

//c)Now we want to increase the count to 10.

for (var i= 0; i<= 10; i++) {
	console.log(i);

	}
	console.log ("COUNT FINISHED!")
//d)Can you do the same with an array?


var myArray = [0,1,2,3,4,5,6,7,8,9,10]
for (var i=0; i < myArray.length; i++) {
  	console.log(myArray[i]);
	}
	console.log("COUNT FINISHED!")

//e)So, how about create a friend list? Change the array values for your friends name and show in console.

var myArray = ["jorge", "david", "bryan", "dani", "marc"]
for (var i = 0; i < 5; i++) {
	console.log(myArray[i] + "");
}

//f)Now we want to add a number, show for console the array position of your friends behind their names.

var myArray = ["jorge", "david", "bryan", "dani", "marc"]
var varname = 1;
for (var i = 0; i < 5; i++) {
	console.log(myArray[i] + " " + "-" + " " + "nº"+ " " + varname);
	varname++;
}

//g)Can you add a last friend into an array? Show the updated array for console.
var myArray = ["jorge", "david", "bryan", "dani", "marc"]
var varname = 1;
myArray.push("oscar");
for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i] + " " + "nº" + varname);
	varname++;
}
console.log(myArray);

//h)We turn back to numbers... So, we want to do a sum, the next number in count must sum to previous number.

var fibonacci = function(n) {
	var a = 0, b = 1, f = 1;
	for (var i = 2; i <= n; i++) {
		f = a + b;
		a = b;
		b = f;
		console.log(f);
	}
};

fibonacci(n)

//i)Can you add the position of all sums?

var fibonacci = function(n) {
	var a = 0, b = 1, f = 1, varname = 1;
	for (var i = 2; i <= n; i++) {
		f = a + b;
		a = b;
		b = f;
		varname++;
		console.log(f + " " + "position nº"+ " " + varname);
	}
};

fibonacci(n)
//j)Create a loop for show in console the results from 0 to 50 in 5 to 5.

for (var i = 0  ; i <= 50; i+= 5) {
	 console.log(i);
}

//k)Now, modify your program for show the results to 0 to 100, in 10 to 10.

for (var i = 0  ; i <= 100; i+= 10) {
	 console.log(i);
}