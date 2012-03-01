/** Public data member */
function Mici(param) {
    this.name = param;
}

var maci = new Mici('macko');
console.log(maci.name);

/** Private data member */

function Malacka(param){
	var name = param;
	this.getName = function(){
		return name;
	}
}
//var malac = new Malacka('malac');
console.log(malac.getName());
console.log(malac.name);

