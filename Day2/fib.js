function fib(n) {
    fib.cache = fib.cache ?? [];
    if(typeof n !== 'number') return 'not a number'
    if (n < 0) return -1
    if (n < 2) return n;
    if (!fib.cache[n]) {
        fib.cache[n] = fib(n - 1) + fib(n - 2);
    }
    return fib.cache[n];
}

console.log(fib(6));
