let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Jaxon", scores: [92, 89, 96, 100, 94] },
  { name: "Charlotte", scores: [86, 72, 92] },
  { name: "Aria", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Aiden", scores: [89, 100] },
  { name: "Liam", scores: [100, 99, 100, 87] },
];

// Outer loop to go through each student
for (let i = 0; i < students.length; i++) {
  let student = students[i]; // Access the current student
  let scores = student.scores; // Access the current student's scores
  let total = 0; // Variable to store the sum of the scores

  // Inner loop to go through the current student's scores
  for (let j = 0; j < scores.length; j++) {
    total += scores[j]; // Add each score to the total
  }

  // Calculate the average by dividing total by the number of scores
  let average = total / scores.length;

  // Print out the student's name and their average score
  console.log(student.name + "'s average score is: " + average.toFixed(2));
}
