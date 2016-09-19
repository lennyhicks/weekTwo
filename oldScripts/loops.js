//while (condition) {
function log(msg) {
    console.log(msg);
}
/*
var count = 1;
while (count <= 500000) {
    log(count);
    count++;
}*/
//foreach

var names = ['Stuff', 'moreStuff', 'mostStuff', 'evenMoreStuff']

for (var n in names) {
    if (names[n].toLowerCase().startsWith("s")) {
        log(names[n]);

    }
}
//for
for (var i = 0; i <= 10; i++) {
    //do Stuff
    log(i * 10);
}
//dowhile
var i = 100;
do {
    i++;
    log(i);
} while (i < 200);