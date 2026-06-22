const sumAll = function(min, max) {
  let sum = 0;
  while (min <= max) {
    sum += min;
    min += 1;
  }
  if (sum > 0) {
    return sum
  } else {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = sumAll;
