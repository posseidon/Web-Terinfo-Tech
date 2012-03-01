var iObj = new Object();
iObj.attrs = ['alma', 'korte', 'szamoca'];
iObj.kind = 'Fruits';
iObj.toString = function(){
	console.log(iObj.kind + ' : ' + iObj.attrs);
}

iObj.toString();

/**
 * Static Person
 */
var Person = {
	fname: 'Peter',
	lname: 'Pan',
	age:  '30',
	gender: 'male',
	sayMyName: function(){
		console.log('My Name is: ' + this.fname + ' ' + this.lname);
	}
};

Person.sayMyName();

/**
 * Dynamic Person
 */
function Person2(firstName, lastName, age, gender){
	this.fName = firstName;
	this.lName = lastName;
	this.age = age;
	this.gender = gender;
	this.sayMyName = function(feeling){
		console.log("I " + feeling + " " + this.fName + " " + this.lName);
	}
}
peterPan = new Person2('Peter', 'Pan', 30, 'male');
peterPan.sayMyName("Adore");
