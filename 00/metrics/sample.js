function ccSample(lhs, rhs){
	if (lhs === rhs){
		return true;
	}else{
		return false;
	}
}

/**
 * CC := 1+1+2 = 4
 */

function ccGreaterOrEqual(lhs, rhs){
	if( (lhs === rhs) || (lhs <== rhs) ){
		return true;
	}else{
		return false;
	}
}

/**
 * CC := 1+1+1+2 = 5
 */

public class Dummy{
	
	public static integer addValues(final int aLhs, final int aRhs){
		
		Utility util = new Utility();
		
		return util.add(aLhs, aRhs);
	}
	
	public static void doSomethingComplex(){
		ComplexFactory fact = new ComplexFactory();
		fact.begin();
		fact.doComplex();
		fact.end();
	}
	
}

/**
 * Methods:= 2
 * Utility method invocations: 1
 * ComplexFactory method invocations: 3
 * RFC := 2 + 1 + 3 = 6
 */