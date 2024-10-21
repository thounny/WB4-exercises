// Define the function to parse the part code
function parsePartCode(partCode) {
  // Split the partCode into supplierCode, productNumber, and size
  let [supplierAndProduct, size] = partCode.split("-"); // Split by '-' to get size
  let [supplierCode, productNumber] = supplierAndProduct.split(":"); // Split by ':' to get supplierCode and productNumber

  // Return an object with the parsed values
  return {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size,
  };
}

// Example part codes
let partCode1 = "XYZ:1234-L";
let partCode2 = "ABC:5678-M";
let partCode3 = "DEF:91011-S";

// Call the function and store the return value in an object variable
let part1 = parsePartCode(partCode1);
let part2 = parsePartCode(partCode2);
let part3 = parsePartCode(partCode3);

// Print out the results for different part codes
console.log(
  "Supplier: " +
    part1.supplierCode +
    " Product Number: " +
    part1.productNumber +
    " Size: " +
    part1.size
);
console.log(
  "Supplier: " +
    part2.supplierCode +
    " Product Number: " +
    part2.productNumber +
    " Size: " +
    part2.size
);
console.log(
  "Supplier: " +
    part3.supplierCode +
    " Product Number: " +
    part3.productNumber +
    " Size: " +
    part3.size
);
