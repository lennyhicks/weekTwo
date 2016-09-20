function myPara_Click() {
    var colors = ["#CCCCCC", "#333333", "#990099"];
    var firstColor = Math.floor(Math.random() * 255);
    var secondColor = Math.floor(Math.random() * 255);
    var thirdColor = Math.floor(Math.random() * 255);
    var rand = Math.floor(Math.random() * colors.length);
    var colorString = ("\"" + firstColor + ", " + secondColor + ", " + thirdColor + "\"");
    $('#controls-wrapper').css("background-color", colors[rand]);
    $('#paraOne').css("background-color", colors[rand]);

}

$(function() {
    //Wire up the click event handler
    $("#paraOne").on("click", myPara_Click);

    $("h3").on("click", function() {
        $(this).hide();
    });

    $("li:contains('Item 1')").on("click", function() {
        $(this).hide();
    });
});