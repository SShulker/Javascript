function countUpwardsByThree(num) {
    for (var num = 1; num <= 30; num *= 3) {
        console.log(num);

}

function guessMyFavoriteNumber(guess) {
    if ( (guess = 67)) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try again! :(...");
    }
}

function convertNumberToDay(number) {
    if (number == 0) {
        console.log("Sunday");
        return;
    } else if (number == 1) {
        console.log("Monday");
        return;
    } else if (number == 2) {
        console.log("Tuesday");
        return;
    } else if (number == 3) {
        console.log("Wednesday");
        return;
    } else if (number == 4) {
        console.log("Thursday");
        return;
    } else if (number == 5) {
        console.log("Friday");
        return;
    } else if (number == 6) {
        console.log("Saturday");
        return;
    } else (number == 7) 
        console.log("This is not a day.");
        return;
    }
}