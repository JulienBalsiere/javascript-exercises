const add = function(x , y) {
	const sum = x + y;
  return sum
};

const subtract = function(x , y) {
  const rest = x - y;
  return rest
};

const sum = function(array) {
 let sum = 0;
 array.forEach(element => {
  sum += element;
 });
 return sum
};

const multiply = function(array) {
  let multiply = 1;
  array.forEach(element => {
  multiply *= element;
 });
 return multiply;
};

const power = function(base , exponent) {
  let power = base ** exponent;
  return power;

};

const factorial = function(n) {
  return (n != 0) ? n * factorial(n - 1) : 1;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
