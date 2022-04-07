// // ASSESSMENT 2: Coding Conceptual Questions

// // Examine the following examples.

// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// // a) Your answer:
// This will log the same string with every letter in its own array. This will look like B,r,a,v,o,2,0,2,2
// // b) Verify and explain:
//Actual output: 
//[
//'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]
// The actual output shows single quotation marks around each letter, with square brackets surrounding the entire array. My answer did not include these. The brackets indicate that the string letters have been split into an array. 


// // --------------------2) What will this log?
const greeter = (name) => {
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student")) 

// // a) Your answer:
// This will not log anything. 

// // b) Verify and explain:
// This did not log anything, because there is no return statement on line 27. If there were a return statement, the output would read 'Hello, LEARN Student!'


// // --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// // a) Your answer:
// This will log [8,10,12,14,16]
// // b) Verify and explain:
// This does log [8,10,12,14,16] because the .map method returns an array with the same amount of numbers, and value * 2 multiplies every number by 2. 


// // --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// // a) Your answer:
// This will log [11, 13, 15]
// // b) Verify and explain:
// This logs [11, 13, 15] because the .filter method filters out numbers based on a given condition, and the given condition is that odd numbers are filtered. This is why we see only odd numbers in the returned array. Value % 2 !== 0 means we are looking for numbers that are odd or rather, numbers that are not evenly divisible by 2. 


// // --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// // a) Your answer:
// This will log JavaScript
// // b) Verify and explain:
//This logs JavaScript because console.log is referencing the index of 0 in the languages array, which is the JavaScript value. If JavaScript were the only word, this would return J. 


// // --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// // a) Your answer: I think this will log: 
//Learn { student: 'George', cohort: 'Bravo', year: 2022 }

// // b) Verify and explain: 
// This logs Learn { student: 'George', cohort: 'Bravo', year: 2022 }. The variable learnStudent is creating a new object (student) named George having the same characteristics found in class Learn, with George modifying the name parameter. 






