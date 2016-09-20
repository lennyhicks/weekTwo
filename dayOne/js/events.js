    var randNumber = Math.floor(Math.random() * 10);
    var wincount = 0;


    function restartGame() {
        randNumber = parseInt(Math.random() * 10) + 1;
        startGame();
    }

    function startGame() {
        randNumber = parseInt(Math.random() * 10) + 1;
        var guess = prompt("What is your Guess?");

        guess *= 1;
        do {
            if (guess == "quit") {
                alert("You gave up on the game. The correct answer was " + randNumber);
                break;
            } else if (guess != randNumber) {
                guess = prompt("Guess again. You was incorrect");
            } else if (guess = randNumber) {
                wincount++;
                alert("You won the game. Your win count is now " + wincount);
                break;
            }
        } while (guess != randNumber || guess != "quit");

    }

    function sayHello() {
        var name = prompt("What's your name?");
        alert("Hello, " + name + "!");
    }

    function doMath() {
        var firstNum = prompt("What is your first Number?");
        var param = prompt("What would you like to do? + - / *");
        var secNum = prompt("What is your second Number?");
        var result = eval(firstNum + param + secNum);
        alert("The result of the equation you entered is " + result);
    }


    function doMathEquation() {
        var equation = prompt("What is your Math Equation?");
        var result = eval(equation);
        alert("The result of the equation you entered is " + result);
    }