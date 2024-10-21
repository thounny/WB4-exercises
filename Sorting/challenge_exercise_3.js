let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

// Function to calculate the average score
function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

// Function to calculate the median score
function getMedian(scores) {
  scores.sort(function (a, b) {
    return a - b;
  }); // Sort the array numerically
  let middleIndex = Math.floor(scores.length / 2);

  if (scores.length % 2 === 1) {
    // Odd number of scores, return the middle one
    return scores[middleIndex];
  } else {
    // Even number of scores, return the average of the two middle ones
    return (scores[middleIndex - 1] + scores[middleIndex]) / 2;
  }
}

// Function to get the highest score (last element in sorted array)
function getHighest(scores) {
  scores.sort(function (a, b) {
    return a - b;
  }); // Sort the array
  return scores[scores.length - 1]; // Last element is the highest
}

// Function to get the lowest score (first element in sorted array)
function getLowest(scores) {
  scores.sort(function (a, b) {
    return a - b;
  }); // Sort the array
  return scores[0]; // First element is the lowest
}

// Calculating and displaying results for myScores
console.log("My Scores: " + myScores);
console.log("My Average: " + getAverage(myScores).toFixed(2));
console.log("My Median: " + getMedian(myScores));
console.log("My Highest Score: " + getHighest(myScores));
console.log("My Lowest Score: " + getLowest(myScores));

console.log("------------------------");

// Calculating and displaying results for yourScores
console.log("Your Scores: " + yourScores);
console.log("Your Average: " + getAverage(yourScores).toFixed(2));
console.log("Your Median: " + getMedian(yourScores));
console.log("Your Highest Score: " + getHighest(yourScores));
console.log("Your Lowest Score: " + getLowest(yourScores));
