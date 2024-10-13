const fibonacci = function(n) {
    if (typeof n === 'string') {
        n = parseInt(n, 10);
    }    
    // n = typeof n === 'string' ? parseInt(n, 10) : n;
    if (n < 0) return 'OOPS';
    if(n === 0) return 0;
    let a = 0, b = 1, result;
    for (let i = 1; i < n; i++) {
        result = a + b
        a = b
        b = result
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
