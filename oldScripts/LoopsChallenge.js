function log(msg) {
    console.log(msg);
}
for (var i = 1; i <= 30; i++) {
    if (i == 3 || i == 13 || i == 17) {
        continue;
    } else
        log(i)
}


var i = 10;
var v = "";
while (i <= 50) {
    v += i;
    i++
}
log(v)



fib = function(numMax) {
    for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
        x = i + j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(20)
    //test ing