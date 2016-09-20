function myButton_Click() {
    //alert("Clicked");
    $("li:contains('mad')").hide();

}

$(function() {
    //Wire up the click event handler
    $("#myButton").on("click", myButton_Click);

    $("li:contains('mad')").on("click", function() {
        $(this).hide();
    });
});