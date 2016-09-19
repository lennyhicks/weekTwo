var firstName = "Lenny",
    lastName = "Hicks",
    middleName = "Ray";
var fullName = firstName + " " + middleName + " " + lastName;

var rev = fullName.split("")
    .reverse()
    .join("");

function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}
var newWay = reverse(fullName);
console.log("Your full name is " + fullName);
console.log("in reverse is " + rev);
console.log("another way is " + newWay)