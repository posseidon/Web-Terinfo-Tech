'use strict'

function printArray(arr) {
  for (var key in arr) {
    console.log(arr[key]);
  }
}

printArray([0,1,2,3]);  // This works.

var a = new Array(10);
printArray(a);  // This is wrong.

a = [,'bubu and kubu'];
printArray(a);  // This is wrong.

a = [0,1,2,3];
a.buhu = 'wine';
printArray(a);  // This is wrong again.

a = new Array();
a[3] = 3;
printArray(a);  // This is wrong again.