    var answer;
    var numbers;
    var wincount = 0;
    var guessAttempts = 0;

    function setVals() {
        $('#guess')[0].options.length = 0;
        numbers = prompt("How many numbers would you like to guess from?");
        var howMany = parseInt(numbers);
        var guessList = 1;
        while (guessList <= howMany) {
            $("#guess").append(new Option(guessList, guessList));
            guessList++;
        }

        $("#guess").append(new Option("Give Up", "quit"));


        $("#message").val("");
        $("#message").text("");
        $("#restartGame").hide();

        //Come up with answer

        answer = parseInt(Math.random() * numbers + 1);
        console.log("Cheater! Don't you dare enter " + answer);
        guessAttempts = 0;

        $("#btnGuess").show();


    }

    function setUpGame() {

        setVals();
        //Hide and Show the divs
        $("#game").hide();
        $("#intro").fadeIn("slow", "linear");
        $("#btnGuess").show();


    }

    function handleGuess() {
        //  var guess = $("guess").find(":selected").text();

        var guess = $("#guess").val();
        guessAttempts++
        if (guess == "quit") {

            $("#message").text("You gave up on the game.");

            $("#restartGame").show();
        } else if (+guess == answer) {
            //tell them the answer is right.
            wincount++;
            $("#message").text("Your guess of " + guess + " was Correct! You won the game " + wincount + " times now. It took you " + guessAttempts + " attempts");
            $("#btnGuess").hide();
            $("#restartGame").show();
        } else {
            // tell them the answer is wrong.

            $("#guess option:selected").remove();
            $("#message").text("Your guess of " + guess + " was wrong! Try Again.");
        }
    }

    function playGame() {
        if (handleGuess) {
            $("#intro").hide();
            $("#game").fadeIn("slow", "linear");
        }
    }

    function restartGame() {


        setVals();

    }
    $(function() {
        // Wire Up event Handlers

        $("#startGame").on("click", playGame);
        $("#btnGuess").on("click", handleGuess);
        $("#restartGame").on("click", restartGame);

        setUpGame();
    });