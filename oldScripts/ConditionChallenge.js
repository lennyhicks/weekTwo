var a = 1;
var b = 2;
var c = 3;
var d = new Date();
var n = d.getDay();

if (a > 5) {
    console.log("This works");
} else if (a > 4) {
    console.log("This works");
} else if (a > 3) {
    console.log("This works");
} else if (a > 2) {
    console.log("This works");
} else if (a > 1) {
    console.log("This works");
} else if (a > 0) {
    console.log("This works 0" + n);
}
switch (n) {
    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wenesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;

    default:
        break;
}

var likesCat = false;
var likeDogs = true;
if (likeDogs && !likesCat) {
    console.log("Cool cat")
} else {
    console.log("get out")
}
//alert("Hello\nHow are you?");

var timesWon = 3;
var timesLost = 1;
if (timesWon > timesLost) {
    console.log("we win")
} else {
    console.log("were Going to win")
}
//alert("Hello\nHow are you?");