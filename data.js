// Array (ordered) of objects ( key: value pairs )

const data = [
  { name: "Dandy", kind: "Dog" },
  { name: "Koshi", kind: "Dog" },
  { name: "Bianca", kind: "Cat" },
  { name: "Finley", kind: "Cat" },
];

function petToString(pet) {
  return `
        PET NAME: ${pet.name}
        KIND: Good ${pet.kind}
    `;
}

console.log(petToString(data[0])); // FIRST
console.log(petToString(data[data.length - 1])); // LAST

for (i = 0; i < data.length; i++) {
  // i is index
  console.log(petToString(data[i])); // i-th
}

// data.forEach(petToString); // rubberstamp each item with named function

// data.forEach((pet) => console.log(petToString(pet)));

// data.forEach(printPet);
