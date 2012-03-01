
function methodCall1(){
	function square(n){
		return n*n;
	};
	var i = 10000;
	var sum = 0;
	while(i--){
		sum += square(i);
	}
	console.log(sum);
}


function methodCall2(){
	var i = 10000;
	var sum = 0;
	while(i--){
		sum += i*i;
	}
	console.log(sum);
}
//methodCall1();
//methodCall2();

/**
 * Faster but less declarative.
 */
function literals(){
	var arr = [];
	var obj = {};
}

/**
 * Slower but more declarative.
 */
function classical(){
	var arr = new Array();
	var obj = new Object();
}

//literals();
//classical();

