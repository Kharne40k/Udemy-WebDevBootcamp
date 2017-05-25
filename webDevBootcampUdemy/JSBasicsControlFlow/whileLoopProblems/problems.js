// problem 1
var i = -10;

console.log("Print all numbers between -10 and 19.");

while (i <= 19) {
  console.log(i);
  i++;
}

// problem 2
var j = 10;

console.log("Print all even numbers between 10 and 40.");

while (j <= 40) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

// problem 3
var k = 300;

console.log("Print all odd numbers between 300 and 333");

while (k <= 333) {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++;
}

// problem 4
var l = 5;

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

while (l <= 50) {
  if (l % 3 === 0 && l % 5 === 0) {
    console.log(l);
  }
  l++;
}
