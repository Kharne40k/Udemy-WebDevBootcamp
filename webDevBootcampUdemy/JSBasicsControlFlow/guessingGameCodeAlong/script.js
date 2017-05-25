var secretNumber = 4;

var guess = Number(prompt("Guess a Number"));

if (guess === secretNumber) {
    alert("You got it right!");
}
else if (guess > secretNumber) {
  alert("Number too high guess again.");
}
else {
  alert("Number is too low guess again.")
}
