// Create an object called 'person' to store contact details
const person = {
  name: "Thounny Keo",
  address: "420 Grove St",
  city: "Atlanta",
  state: "Georgia",
  zip: "30033",
};

// Define a function called 'printContact' to format and return the person's contact info
function printContact() {
  // Use template literals (backticks ``) to format the contact information nicely
  // ${} allows you to insert variables directly into the string
  return `
    ${person.name}            // Insert the person's name
    ${person.address}         // Insert the person's street address
    ${person.city}, ${person.state} ${person.zip}  // Insert city, state, and zip in one line
    `;
}

// Call the 'printContact' function and print the formatted contact information to the console
console.log(printContact());
