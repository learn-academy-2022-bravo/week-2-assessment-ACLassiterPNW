// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

//Test: 
//Function name: multBy3
describe("multBy3",() => {
  //Description of function
  it("takes in an array of numbers and returns an array with all the numbers multipled by 3.",() => {
    //Function: multBy3, Variable name: numbersArray1, expected output
    expect (multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30]) 
    //Function: multBy3, Variable name: numbersArray2, expected output
    expect (multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
  
})

// b) Create the function that makes the test pass.
//Function: multBy3, Parameter: array
const multBy3 = (array) => {
    //Returns an array with the same amount of numbers, each multiplied by 3
    return array.map(value => value * 3)
  }
  
  console.log(multBy3(numbersArray1))
  console.log(multBy3(numbersArray2))
  
  
  

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


//Test: 
//Function name: divisibleBy3
describe("divisibleBy3",() => {
//Description of function 
  it("returns a string that says 'is divisible by three' or 'is not divisible by three'",() => {
    //Function: divisibleBy3, Variable name: num1, expected output
    expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
    //Function: divisibleBy3, Variable name: num2, expected output
    expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
    //Function: divisibleBy3, Variable name: num3, expected output
    expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")

    })
  
})
//Yarn jest fail received: 
//divisibleBy3 › returns a string that says 'is divisible by three' or 'is not divisible by three'
//ReferenceError: divisibleBy3 is not defined

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//Function will take in a number as an argument and decide if the number is evenly divisible by 3, or not. 
//Function name: divisibleBy3
// Input: number
const divisibleBy3 = (number) => {

    // Use conditional statements with modulo to calculate division, followed by return line with expected output
    if(number % 3 === 0){
         return `${number} is divisible by three`
  } else{
         return `${number} is not divisible by three`
  }
}
   console.log(divisibleBy3(num1))
   console.log(divisibleBy3(num2))
   console.log(divisibleBy3(num3))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//Test: 
//Function name: capitalizedArray
describe("capitalizedArray",() => {
    //Description of function
    it("returns an array with all words capitalized",() => {
      //Function: capitalizedArray, Variable name: randomNouns1, expected output
      expect(capitalizedArray(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
      //Function: capitalizedArray, Variable name: randomNouns1, expected output
      expect(capitalizedArray(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
      })
    
  })
// //Yarn jest fail received: 
// //capitalizedArray › returns an array with all words capitalized
// //ReferenceError: randomNouns1 is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// // b) Create the function that makes the test pass.

// // Return statements 

//Function will take in an array of words and return an array with all the words capitalized.  
//Function name: capitalizedArray
// Input: array 
const capitalizedArray = (array) => {
    // // Use .map to return an array with the same number of values
    //use .charAt to locate character at index 0 
    //use .toUpperCase to capitalize character at index zero on each word 
    //use .slice to create subset of each word, with letters remaining lowercase 
    //use .join to separate words by commas 
    //use .split to split the words by quotation marks
   let capital = array.map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(" ")
   return capital.split(" ")
}
console.log(capitalizedArray(randomNouns1))
console.log(capitalizedArray(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowelFinder",() => {
    it("returns the index of the first vowel",() => {
      //Function: firstVowelFinder, Variable name: vowelTester1, expected output
      expect(firstVowelFinder(vowelTester1)).toEqual(1)
      //Function: firstVowelFinder, Variable name: vowelTester2, expected output
      expect(firstVowelFinder(vowelTester2)).toEqual(0)
      //Function: firstVowelFinder, Variable name: vowelTester3 expected output
      expect(firstVowelFinder(vowelTester3)).toEqual(2)
      })
  })
//Yarn jest fail received: 
//firstVowelFinder › returns the index of the first vowel
//ReferenceError: firstVowelFinder is not defined


// b) Create the function that makes the test pass.

// My first code looked like this, which was incorrect: 
//const firstVowelFinder = (vowelTester1, vowelTester2, vowelTester3) => {
//     return firstVowelFinder.indexOf('a','e','i','o','u')
// }

//*** After searching online to gain a better sense of direction after encountering difficulty, I found the following video on YouTube which I used to refine my code: 
//https://www.youtube.com/watch?v=Xxgauhcq_y8 
// I then read up on the .search() method on W3Schools to understand how this method is used. I learned that the search() method returns the index of the first match, which in the case of this code would be the first vowel that matches. I have tested this function against different variables and have received the expected output each time. Additionally, I noticed in the YouTube video that the creator used the "g" modifier in his code. I wasn't familiar with this, so I also used W3Schools to learn more. The "g" modifier specifies a global match, which finds all matches as opposed to the first match only (from what I understand). I was able to remove the "g" modifier from my code without a change to its functionality. 
//https://www.w3schools.com/jsref/jsref_search.asp#:~:text=The%20search()%20method%20returns,()%20method%20is%20case%20sensitive 


//Function takes in a string and logs the index of the first vowel. 
//Function name: firstVowelFinder
//Input: string
const firstVowelFinder = (string) => {
// Use .search() method to return the position of the first vowel in the string
return string.search(/[a,e,i,o,u,A,E,I,O,U]/)

}
console.log(firstVowelFinder(vowelTester1))
console.log(firstVowelFinder(vowelTester2))
console.log(firstVowelFinder(vowelTester3))
