const person = {
  // create an object literal of key-value pairs
  first: "Thounny",
  last: "Keo",
  age: 24,
  phone: "123-456-7890",
  DOB: new Date("12-15-1999"),
};

const person2 = {
  // create an object literal of key-value pairs
  first: "Mike",
  last: "Tyson",
  age: 64,
  phone: "1011-121-3141",
  DOB: new Date("5-12-1965"),
};

function printLabel(p) {
  // receive one whole object
  // can also do const first = p.first
  // plug in for the template literal

  // compose a template string based on the object's properties
  return `
    NAME: ${p.first} ${p.last}
    PHONE: ${p.phone}
    `;
}

console.log(printLabel(person));
console.log(printLabel(person2));
console.log(
  printLabel({ first: "Muhammad", last: "Ali", phone: "1-800-888-4444" })
);
