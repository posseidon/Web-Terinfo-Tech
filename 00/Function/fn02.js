/** Function overloading fails */
function doSth(par1, par2){
	return (par1 + par2);
}

function doSth(par1, par2, par3){
	return par1 + par2 + par3;
}

console.log(doSth(1,2));
console.log(doSth(1,2,3));





function doAnotherTh(){
	var sum = 0;
  for(var i = 0; i < arguments.length; i++)
  {
      sum += arguments[i];
  }
  return sum;
}

retVal = doAnotherTh(1,2);
console.log(retVal);
retVal = doAnotherTh(1,2,3);
console.log(retVal);
retVal = doAnotherTh(1,2,3,4);
console.log(retVal);

function getParameterType(a)
{
    /// Get the Type of the object passed in
    var t = typeof(a);
    /// Execute different code depending on the type passed in
    switch (t)
    {
        case "number":
          /// Number Type Overload Stuff Here
					console.log("I'm Number");
          break;
        case "string":
          /// StringType Overload Stuff Here
					console.log("I'm String");
          break;
        case "boolean":
          /// Boolean Type Overload Stuff Here
					console.log("I'm Boolean");
          break;
        case "object":
           /// Object Type Overload Stuff Here
					console.log("I'm Object");
          break;
				case "function":
					/// Function Type Parameter
					console.log("I'm Function");
					break;
        default:
            alert("No overload exists for this object type: " + t);
    }
		return t;
}
getParameterType(1);
getParameterType('1');
getParameterType(false);
getParameterType(doAnotherTh);
