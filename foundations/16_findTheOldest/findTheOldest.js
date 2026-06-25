// Trouver la personne la plus agée
const findTheOldest = function(people) {
  const getAge = function(person) {
  const birth = person.yearOfBirth;
  const death = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
  return death - birth;
  };

  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);

    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldest;
    }
  });

};

// Do not edit below this line
module.exports = findTheOldest;
