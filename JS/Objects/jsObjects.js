//JS OBJECTS:

//a)

var student = {
	name: "David Aughan",
	class: "VI",
	id: 12,
};

console.log(student)

//b)

var student = {
	name: "David Aughan",
	class: "VI",
	id: 12,
	properties: function(){
		return this.name + " " + this.class + " " + this.id;
	}
};

console.log(student.properties())

//c)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	changeClase: function(clase){
		this.clase = clase;
		}
};

student.changeClase("XI")

//d)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	changeClase: function(clase){
		this.clase = clase;
		}
};

delete student.id;
console.log(student)

//e)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	changeClase: function(clase){
		this.clase = clase;
		}
};

console.log(Object.getOwnPropertyNames(student));


//Object.key(student).length//*****


//f)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	changeClase: function(clase){
		this.clase = clase;
		}
};

student.city= "Barcelona";

console.log(student);

//g)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	
};

changeName = function(){
		student.fullName = student.name;
		delete student.name;
		console.log(student)
		};

changeName();
console.log(student);

//h)

var student = {
	name: "David Aughan",
	clase: "VI",
	id: 12,
	
};

console.log("Hello, my name is" + " " + student.name + "," + student.clase + " " + student.id);