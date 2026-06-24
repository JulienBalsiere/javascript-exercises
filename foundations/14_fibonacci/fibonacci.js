const fibonacci = function(n) {
  let previous = 1;
  let current = 1;
  if (n === 1) {
    return 1;
  } else if (n === 0 || n === "0") {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (n < 0) {
    return "OOPS"
  } else {
    for (let i = 3; i <= n; i++) {
      let next = previous + current;
      previous = current;
      current = next;
    }
    return current;
  }
};

// Do not edit below this line
module.exports = fibonacci;
