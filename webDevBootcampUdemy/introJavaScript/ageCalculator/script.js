var ageYears = prompt("How old are you in years?");
var daysYear = 365
var leapYear = ageYears / 4

var ageDays = (ageYears * daysYear) + leapYear; 

alert(ageYears + "years is roughly " + ageDays.toFixed(2) + " days.");
