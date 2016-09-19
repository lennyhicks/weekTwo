var firstName = "Lenny"; // , lastName = "Hicks", myAge = 25, something = 23.3; // String
var lastName = "Hicks" // String
var myAge = 25; // Interger
var something = 23.3; //float
var name = ['lenny', 'blag', 'neee', 'blahh']



function d(msg) {
    console.log(msg);
}
d(name[0] + " " + name[1] + " " + name[2])
    /*
    multi
    line
    comment
    */
d(firstName + " " + lastName);
firstName = "blah", lastName = "new";
d(firstName + " " + lastName);
//Adding two numbers together
var sum = 2 + 2;
d(sum);
sum = sum + 7;
d(sum);
sum = sum + firstName;

var bankBalance = 100;
var deposit = "10";

//null no value
//undefined not initilzed
//nan not a number
/*
|----------------Statement-----------------|
|           |---------Expression-----------|
*/
var total = bankBalance + parseInt(deposit);
d(total);

var a = 10,
    b = 17,
    c = 10;


d(a + b + c);