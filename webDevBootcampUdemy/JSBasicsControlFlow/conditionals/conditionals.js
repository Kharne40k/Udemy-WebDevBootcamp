var age = prompt("Please enter your age in years: ");

if(age < 0){
  console.log("Invald age negative number");
}
if (age === "21") {
  console.log("Happy 21st birthday!!");
}
if ((age % 2) == 1) {
  console.log("Your age is odd!");
}
if (Math.sqrt(age) === 0) {
  console.log("perfect square!");
}
