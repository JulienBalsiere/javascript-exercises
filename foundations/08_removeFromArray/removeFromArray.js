const removeFromArray = function(array, ...args) {
  let newArray = array.filter(val => !args.includes(val));
  return newArray
};

// ...args prend n'importe quel nombre qu'on lui passe comme argument (toutes les valeurs à retirer dans un tableau).
// Do not edit below this line
module.exports = removeFromArray;
