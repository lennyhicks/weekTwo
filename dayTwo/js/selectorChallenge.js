function myPara_Click(theChosenOne) {

    var myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var wordArray = ['PARTI', 'TYME 2 PARTI', 'COM ON BARBIE LETZ GO PARTIZ', 'WOO'];
    setInterval(function() {
        var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand1 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand2 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand3 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand4 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand5 = myArray[Math.round(Math.random() * (myArray.length - 1))];
        var rand6 = Math.round(Math.random() * 50);
        var rand7 = wordArray[Math.floor(Math.random() * (myArray.length))];
        $(theChosenOne).css("background-color", '#' + rand + rand2 + rand3 + rand1 + rand5 + rand4);
        $(theChosenOne).css("color", '#' + rand4 + rand5 + rand1 + rand3 + rand2 + rand);
        $(theChosenOne).css("font-size", rand6 + "px");
        $("body").css("background-color", '#' + rand4 + rand5 + rand1 + rand3 + rand2 + rand);
        $(theChosenOne).text(wordArray[Math.floor(Math.random() * (myArray.length))]);
        setTimeout(function() {
            var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand1 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand2 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand3 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand4 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand5 = myArray[Math.round(Math.random() * (myArray.length - 1))];
            var rand6 = Math.round(Math.random() * 50);
            var rand7 = wordArray[Math.floor(Math.random() * (myArray.length))];
            $(theChosenOne).css("font-size", rand6 + 'pt');
            $(theChosenOne).css("background-color", '#' + rand + rand2 + rand1 + rand3 + rand5 + rand4);
            $(theChosenOne).css("color", '#' + rand4 + rand5 + rand1 + rand3 + rand2 + rand); //css tag adds to style element
            $(theChosenOne).css("font-size", rand6 + 'pt');
            $(theChosenOne).text(wordArray[Math.floor(Math.random() * (myArray.length))]);
        }, 1000);
    }, 1000);

}

$(function() {
    //Wire up the click event handler
    $("#paraOne").on("click", myPara_Click("#paraOne"));

    $("h3").on("click", function() {

        $("h3").on("click", myPara_Click("h3"));
        $("h3").replaceWith("<h1>ITS IZ A PARTI!!1!</h1>");

    });

    $("li:contains('Item 1')").on("click", function() {

        $(this).replaceWith("<h1>I KAN HAZ PARTIZ!!1!</h1>");
    });
});