function addBinary(a, b) {
    let num = a + b;
    let ret = "";
    let res;
    
    while (num > 1) {
        num = Math.floor(num / 2);
        res = num % 2;
        ret += res.toString();
    }
    
    res === 1 ? ret += '1' : ret += '0';
    ret.split('').reverse().join('');
    
    return ret;
}

console.log(addBinary(51,12));