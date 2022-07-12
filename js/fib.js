function fib(n){
    let cache = []
	if (n === 0) {
	    cache[0] = 0
        return 0;
    }
    if (n === 1) {
        cache[1] = 1
        return 1;
	}
	if (n === 2) {
        cache[2] = 2
        return 1;
	}
	if(!cache[n]) {
	 cache[n] = fib(n - 1) + fib(n - 2);
	}
	return cache[n]
}
    
console.log(fib(6));
