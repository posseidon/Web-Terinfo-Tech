/**
 * Scope. Private variables.
 */
function Ninja(){
  var slices = 0;
  
  this.getSlices = function(){
    return slices;
  };
  this.slice = function(){
    slices++;
  };
}

var ninja = new Ninja();
ninja.slice();
console.log(ninja.slices);

