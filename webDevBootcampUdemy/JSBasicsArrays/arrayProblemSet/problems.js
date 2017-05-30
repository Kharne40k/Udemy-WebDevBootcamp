//print a provided array in reverse.

function printReverse(startArray) {
  for (var i = startArray.length - 1; i >= 0; i--) {
    console.log(startArray[i]);
  }
}

// determines whether every index in an array is the same value.

function isUniform(startArray) {
  var firstValue = startArray[0];
  for (var i = 1; i < startArray.length; i++) {
    if (firstValue !== startArray[i]) {
      return false;
    }
  }
  return true;
}

// returns sum of all numbers in the array

function sumArray(startArray) {
  var sumValues = 0;
  startArray.forEach(function(i){
    sumValues += i;
  });
  return sumValues;
}

// returns highest value in the array

function max(startArray) {
  var highestValue = 0;
  for (var i = 1; i < startArray.length; i++) {
    if (startArray[i] > highestValue) {
      highestValue = startArray[i];
    }
  }
  return highestValue;
}
