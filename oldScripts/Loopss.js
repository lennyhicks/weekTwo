function log(msg) {
    console.log(msg);
}
/*
for (var i = 100; i >= 0; i -= 5) {
    console.log(i);
    var j = 0;
    while (j < i) {
        j++
        console.log(j);
    }
    j = 0;
}


var i = 100;
while (i > 100) {
    console.log(i);
    i--;
}
*/

var start = new Date().getTime();
for (var i = 1; i <= 100000; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            log("Fizz Buzz!")
        } else {
            log("Fizz");
        }
    } else if (i % 5 == 0) {
        log("Buzz");
    } else {
        log(i);
    }
}

var end = new Date().getTime();
var time = end - start;


//more efficent
var start2 = new Date().getTime();
for (var i = 1; i <= 100000; i++) {
    if (i % 3 == 0 && i % 5 ==  
    0) {
        log("Fizz Buzz!");
    } else if (i % 3 == 0) {
        log("Fizz");
    } else if (i % 5 == 0) {
        log("Buzz");
    } else {
        log(i);
    }
}

var end2 = new Date().getTime();
var time2 = end2 - start2;




log('Execution time: ' + time);

log('Execution time: ' + time2);

/*
for (var q = 100; q > 0;) {
    if (q % 25 == 0) {
        log(q + " is divisible by 25.");
    } else {
        log(q);
    }
    q--;
}
*/