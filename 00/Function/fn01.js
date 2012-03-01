/** Classical function */

function dummy() {
    var iLocalVariable = "I'm not an Anonymous function.";
    return iLocalVariable;
}
//console.log(dummy());
//console.log(dummy);
/** Anonymous function */
var testFn = function () {
        var iLocalVariable = "This is my String";
        return iLocalVariable;
    }
    /** Pointer Copy */
var testPointer = testFn;
console.log(testPointer);
/** Function Executed with Return Value */
var testFunctionValue = testFn();
console.log(testFunctionValue);
/** Execute Pointer method */
var testPointerEvaluate = testPointer();
console.log(testPointerEvaluate);


/** Self-executing function */ 
(function () {
    var tmpVar = "Hello Me!";
    console.log(tmpVar);
})();

/** Recursive function */
function factorial(aNumber) {
    if (aNumber < 2) {
        return aNumber;
    }
    return aNumber * factorial(aNumber - 1);
}
//console.log(factorial(10));
/** Closure */
function greet(message) {
    console.log(message);
}

function greeter(name, age) {
    return name + ", who is " + age + " years old, says hi!";
}
// Generate the message
var message = greeter("Sanyi a kiraly!", 47);
// Pass it explicitly to greet
greet(message);