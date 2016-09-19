var a = 19,
    b = 40;

    //for each - goes through all items in a collection of items
    //do {
      //doWhile loop  
    //} while (condition);
var timesTested = 0;

var start = +new Date();
while (timesTested < 210000000) {
    var temp = a,
        a = b,
        b = temp;
    // console.log("A = " + a + ": B = " + b)
    timesTested++;
}
var end = new Date().getTime();
var time = end - start;
log('Execution time: ' + time);

timesTested = 0;


var start2 = +new Date();
while (timesTested < 210000000) {

    var [a, b] = [b, a];
    timesTested++;
}
var end2 = new Date().getTime();
var time2 = end2 - start2;
log('Execution time: ' + time2);

var c = 2;
c = (a * b) / c;
//console.log("A * B / C = " + c)

// 5 - - 26/3  13.667
function log(msg) {
    console.log(msg)
}
var theNumber = 5;
theNumber--;
var theNewNumber = 15;
theNumber = theNumber - theNewNumber * 2;
theNumber = 5 - theNumber / 3;
//console.log(theNumber);