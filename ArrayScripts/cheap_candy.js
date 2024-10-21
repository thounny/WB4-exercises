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

// 1. Find candies that cost less than $4.00
console.log("Candies that cost less than $4.00:");
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4.0) {
    console.log(products[i].product);
  }
}

// 2. Find candies with "M&M" in their name
console.log("Candies that have M&M in their name:");
for (let i = 0; i < products.length; i++) {
  if (products[i].product.includes("M&M")) {
    console.log(products[i].product);
  }
}

// 3. Check if we carry Swedish Fish
let foundSwedishFish = false;
for (let i = 0; i < products.length; i++) {
  if (products[i].product === "Swedish Fish") {
    foundSwedishFish = true;
    break;
  }
}

if (foundSwedishFish) {
  console.log("Yes, we carry Swedish Fish!");
} else {
  console.log("No, we do not carry Swedish Fish.");
}
