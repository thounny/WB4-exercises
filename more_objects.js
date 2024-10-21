// A single object can have many different unrelated properties
const person = {
  // Create an object literal of key-value pairs
  first: "Thounny",
  last: "Keo",
  age: 24,
  phone: "123-456-7890",
  DOB: new Date("12-15-1999"),
};

console.log(person.DOB);
console.log(person.phone);
console.log(person.hobby);

person.hobby = "boxing";

const fruit = [
  // Create an array literal of ordered individual items
  "apple",
  "banana",
  "cherry",
];
console.log(fruit[1]); // Access by offset position

fruit.push("pineapple"); // add one more item to the end of the list
fruit.push("strawberry"); // add one more item to the end of the list
fruit.push("AAA", "ZZZ"); // add two more items to the end of the list

console.log(fruit[4]);

empty_array = [];
empty_object = [];
