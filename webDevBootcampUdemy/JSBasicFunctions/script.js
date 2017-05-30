//Simple function to say if a number is even or odd where even returns true and odd returns false.

function isEven(num) {
  return num % 2 === 0;
}

//Simple function to do Factorial numbers.

function factorial(num) {
  var answer = 1;
  for (var i = 2; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
}

//Simple function to change kebab case to snake case.

function kebabToSnake(str) {
//   var answer = str;
//   for (var i = 0; i <= str.length; i++) {
//     answer = answer.replace("-", "_")p
//   }
//   return answer;
  var answer = str.replace(/-/g, "_");
  return answer;
}
