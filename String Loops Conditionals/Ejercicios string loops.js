for (var i = 0  ; i <= 5; i++) {
	 console.log(i);
}
for (var i = 0; i <= 5; i++) {
	console.log(i); 
		
	}
	console.log("COUNT FINISHED!");

var myArray = [0,1,2,3,4,5,6,7,8,9,10]
for (var i=0; i < myArray.length; i++) {
  	console.log(myArray[i]);
	}
	console.log("COUNT FINISHED!")

var myArray = ["jorge", "david", "bryan", "dani", "marc"]
for (var i = 0; i < 5; i++) {
	console.log(myArray[i] + "");
}

var myArray = ["jorge", "david", "bryan", "dani", "marc"]
var varname = 1;
for (var i = 0; i < 5; i++) {
	console.log(myArray[i] + " " + "-" + " " + "nº"+ " " + varname);
	varname++;
}

var myArray = ["jorge", "david", "bryan", "dani", "marc"]
var varname = 1;
myArray.push("oscar");
for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i] + " " + "nº" + varname);
	varname++;
}
myArray.push("oscar");


for (var i = 0  ; i <= 50; i+= 5) {
	 console.log(i);
}

for (var i = 0  ; i <= 100; i+= 10) {
	 console.log(i);
}

**** Ejercicio h / i ****

var name = "oscar"
	if (name > 8) {
		console.log("Es mas largo que 8");
	}
	else{
		console.log("Es mas corto que 8")
	}

var name = "oscar"
	if (name > 8) {
		console.log( name + ""+ "es mas largo que 8");
	}
	else{
		console.log( name +"" +"es mas corto que 8")
	}
var apellido = "leon"
	if (apellido > 8) {
		console.log( apellido + ''+ "es mas largo que 8")
	}
	else{
		console.log( apellido +'' +"es mas corto que 8")
	}




for (var i = 0; i < Things.length; i++) {
	Things[i]
}


var fibo= function(number){
	for (var i = 0; i < 1800; i++) {
		console.log(fibo);
	}
	return(number-1+ number);
}

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}
///CODE ACADEMY --> RECURSION 

var multiplyBy10= function(number){
    return(number * 10);
}

for (var i=1; i <=10; i++) {
    console.log(i);
}

function countTo(int) {
	for (var i=1; i <=int; i++) {
    console.log(i);
}
}

function countTo(int) {
	for (var i=1; i <=int; i++) {
    console.log(i);
}
}

countTo(20)



function multiplyBy10(number) {
  console.log(number * 10);
}

function multiplesOf10(limit) {
  for (var i=1; i <=limit; i++) {
    multiplyBy10(i);
  }
}

multiplesOf10(40)