// person builder function
function person(first, last, age) {
  // convert two strings and a number into ONE object
  return {
    first: first,
    last: last,
    age: age,
  }; // return literal object
}

let personObject = person("Thounny", "Keo", 24);

console.log(`
    FIRST NAME: ${personObject.first}
    LAST NAME: ${personObject.last}
    AGE: ${personObject.age}
    `);
