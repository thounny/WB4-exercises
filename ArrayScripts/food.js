let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

// Initialize a variable to hold the subtotal
let subtotal = 0;

// Loop through the lunch array to add up the prices
for (let i = 0; i < lunch.length; i++) {
  subtotal += lunch[i].price; // Add each item's price to the subtotal
}

// Calculate tax (8% of subtotal)
let tax = subtotal * 0.08;

// Calculate tip (18% of subtotal)
let tip = subtotal * 0.18;

// Calculate the total due (subtotal + tax + tip)
let totalDue = subtotal + tax + tip;

// Display the results
console.log("Subtotal: $" + subtotal.toFixed(2)); // Show the subtotal rounded to 2 decimal places
console.log("Tax: $" + tax.toFixed(2)); // Show the tax rounded to 2 decimal places
console.log("Tip: $" + tip.toFixed(2)); // Show the tip rounded to 2 decimal places
console.log("Total Due: $" + totalDue.toFixed(2)); // Show the total due rounded to 2 decimal places
