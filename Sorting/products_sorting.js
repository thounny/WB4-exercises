let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Twix", price: 1.99 },
  { product: "Snickers", price: 2.5 },
  { product: "Milky Way", price: 1.99 },
  { product: "Kit Kat", price: 3.49 },
  { product: "Skittles", price: 2.79 },
  { product: "Starburst", price: 2.99 },
];

// 1. Sort products by product name (A-Z)
products.sort(function (a, b) {
  if (a.product < b.product) {
    return -1; // a comes before b
  } else if (a.product > b.product) {
    return 1; // a comes after b
  } else {
    return 0; // a and b are equal
  }
});

// 2. Display sorted products by name
console.log("Products sorted by name:");
for (let i = 0; i < products.length; i++) {
  console.log(products[i].product + " - $" + products[i].price.toFixed(2));
}

// 3. Draw a long dashed line
console.log("--------------------------------------------------");

// 4. Sort products by price (Descending)
products.sort(function (a, b) {
  return b.price - a.price; // b comes before a if b's price is higher
});

// 5. Display sorted products by price (Descending)
console.log("Products sorted by price (descending):");
for (let i = 0; i < products.length; i++) {
  console.log(products[i].product + " - $" + products[i].price.toFixed(2));
}
