var iObj = new Object();
iObj.attrs = ['alma', 'korte', 'szamoca'];
iObj.kind = 'Fruits';
console.log(iObj.kind + ' : ' + iObj.attrs);

/**
 * Static Person
 */
var Person = {
	fname: 'Peter',
	lname: 'Pan',
	age:  '30',
	gender: 'male'
};
console.log('Obj1: ' + Person.fname + ' ' + Person.lname);

/**
 * Dynamic Person
 */
function Person2(firstName, lastName, age, gender){
	this.fName = firstName;
	this.lName = lastName;
	this.age = age;
	this.gender = gender;
	
}

peterPan = new Person2('Obj2: Peter', 'Pan', 30, 'male');
console.log(peterPan.fName + ' ' + peterPan.lName);

console.log(peterPan.constructor.toString());