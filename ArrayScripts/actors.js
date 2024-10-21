let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// 1. Find the Academy Member whose ID is 187
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].memID === 187) {
    console.log("The member with ID 187 is: " + academyMembers[i].name);
  }
}

// 2. Find members who have been in at least 3 films
console.log("Members in at least 3 films:");
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].films.length >= 3) {
    console.log(academyMembers[i].name);
  }
}

// 3. Find members whose name starts with "Bob"
console.log("Members whose name starts with Bob:");
for (let i = 0; i < academyMembers.length; i++) {
  if (academyMembers[i].name.startsWith("Bob")) {
    console.log(academyMembers[i].name);
  }
}

// 4. Find members who have been in a film that starts with "A"
console.log("Members who have been in a film that starts with 'A':");
for (let i = 0; i < academyMembers.length; i++) {
  for (let j = 0; j < academyMembers[i].films.length; j++) {
    if (academyMembers[i].films[j].startsWith("A")) {
      console.log(academyMembers[i].name);
      break; // Stop checking more films for this member
    }
  }
}
