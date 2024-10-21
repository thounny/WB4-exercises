let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// 1. Find when the PROG200 course starts
for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId === "PROG200") {
    console.log("The PROG200 course starts on: " + courses[i].StartDate);
  }
}

// 2. Find the title of the PROJ500 course
for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId === "PROJ500") {
    console.log("The title of the PROJ500 course is: " + courses[i].Title);
  }
}

// 3. Find the titles of the courses that cost $50 or less
console.log("Courses that cost $50 or less:");
for (let i = 0; i < courses.length; i++) {
  if (parseFloat(courses[i].Fee) <= 50.0) {
    console.log(courses[i].Title);
  }
}

// 4. Find which classes meet in Classroom 1
console.log("Courses that meet in Classroom 1:");
for (let i = 0; i < courses.length; i++) {
  if (courses[i].Location === "Classroom 1") {
    console.log(courses[i].Title);
  }
}
