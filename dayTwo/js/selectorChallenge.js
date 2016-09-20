function myPara_Click(theChosenOne) {

    var myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    setInterval(function() {
        var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand1 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand2 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand3 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand4 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand5 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        $(theChosenOne).css("background-color", '#' + rand + rand2 + rand3 + rand1 + rand5 + rand4);
        setTimeout(function() {
            var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand1 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand2 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand3 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand4 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand5 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            $(theChosenOne).css("background-color", '#' + rand + rand2 + rand1 + rand3 + rand5 + rand4);
        }, 1000);
    }, 1000);

}

$(function() {
    //Wire up the click event handler
    $("#paraOne").on("click", myPara_Click("#paraOne"));

    $("h3").on("click", function() {
        $("h3").replaceWith("<h1>ITS IZ A PARTI!!1!</h1>");

        $("h3").on("click", myPara_Click("h3"));
    });

    $("li:contains('Item 1')").on("click", function() {

        $(this).replaceWith("<h1>I KAN HAZ PARTIZ!!1!</h1>");
    });
});