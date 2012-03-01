/** to Var or not to var */
foo = 1;

function test() {
    //console.log(foo);
    foo = 'bar';
    //console.log(foo);
}
test();
//console.log(foo);
console.log("-----------------");

/** Let's try it out with var */
/** Global scope **/
var foo2 = 2;

function test2() {
    foo2 = 'bar2';
}
test2();
//console.log(foo2);
console.log("-----------------");
/** Something is Wrong */
var foo3 = 3;

function test3() {
    var foo3 = 'bar3';
}
test3();
//console.log(foo3);
