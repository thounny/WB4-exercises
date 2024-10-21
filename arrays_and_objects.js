// String = ordered list of characters

text = "ABC"; // <-- String literal ""
console.log(text[0]); // A
console.log(text[text.length - 1]); // LAST ONE (c)

// Array = ordered list of values
list = ["apple", "banana", "cherry"]; // <-- Array literal []
console.log(list[0]); // apple
console.log(list[2]); // cherry
console.log(list[list.length - 1]); // Cherry again

// Object = A bag of values accessed by name/keyboard = like a dictionary
dictionary = { a: "apple", b: "banana", c: "cherry" }; // can also change var name to fruits or whatever
console.log(dictionary["a"]); // apple
console.log(dictionary["c"]); // cherry
console.log(dictionary.b); // DOT notation = banana

airports = {
  PDX: "Portland Airport",
  ATL: "Hartsfield-Jackson Airport",
  TPA: "Tampa Airport",
  ORL: "Orlando Airport",
};

console.log(airports.ATL); // DOT notation - short way
console.log(airports["ORL"]); // Square bracket [] with string key

zip_codes = { 97018: "Columbia City, OR" };
console.log(zip_codes[97018]);
z = 97018;
console.log(zip_codes[z]);
