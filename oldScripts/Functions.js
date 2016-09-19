function log(msg) {
    console.log(msg);
}

function helloWorld() {
    log("Hello World!");
}

helloWorld();
log("Hello World!");

/*
var a = 10,
    b = 50;

function sum(a, b) {
    return a + b;

log(sum(a, b));

var i = 1;

function countTo(num) {
    while (i <= num) {
        log(i);
        i++;
    }
}
countTo(50);
*/
var firstName = "Lenny";
var lastName = "Hicks";
var isReversed = true;
var name = ['Lenny', 'Hicks'];

function sayName(firstName, lastName, isReversed) {
    if (isReversed) {
        log(revName(firstName));
    } else {
        log("Hello " + firstName + " " + lastName + ". How are you today?");
    }
}

function revName(name) {
    var revName = name.split('').reverse().join('');
    return revName;
}

sayName(firstName, lastName, isReversed);
sayName(name[0], name[1], false);

var a = 10,
    b = 50;

function sum(a, b) {
    return a + b;
}
log(sum(a, b));