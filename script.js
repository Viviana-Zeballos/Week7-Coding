console.log("Question 1:");

// // Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

const ages = [3,9,23,64,2,8,28,93];
ages[ages.length-1] - ages[0];
ages.push(24); // here is where I added a new age to the array
// below I created a function that can calculate the average of an array. This will also be used throughout this page.
function averageArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}
console.log(averageArray(ages));

console.log("Question 2:");

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
const averageLettersPerName = totalLetters / names.length;
console.log(averageLettersPerName);
const concatenateNames = names.join(' ');
console.log(concatenateNames);


console.log("Question 3:");

// How do you access the last element of any array?
console.log("You access the last element in any array by writing the array name and then using .length and subtracting by 1 in the index.") // example found in question 1.

console.log("Question 4:");

// How do you access the first element of any array?
console.log("You access the first element by writing the array name and using 0 to indicate the first element in the index. ")
// example found in question 1.

console.log("Question 5:");

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5,3,4];
let nameLengths = []; 

for (let i = 0; i < names.length; i++) {
    names[i].length;
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

console.log("Question 6:");

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0; // declared this variable outside of the loop so it can be accessible.

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
} 
console.log(sum);

console.log("Question 7:");

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function takesTwo(word, n) { 
    return word.repeat(n); 
}

console.log(takesTwo("Pizza", 3));

console.log("Question 8:");

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

fullName("Viviana","Zeballos")

console.log("Question 9:");

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function arrayOfNum(array) {
    let sum = 0;
    for (let i =0; i < array.length; i++) {
        sum += array[i];
    }
    return sum > 100;
}

console.log(arrayOfNum([200,1,3]));

console.log("Question 10:");

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(averageArray(numbers)); // I actually wrote a function called averageArray in question 1 so I was able to use it here. I created a new array called numbers to test it out and it worked!

console.log("Question 11:");

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let array1 = [45,65,85,95];
let array2 = [67,90,23,14];

function number(array1, array2) {
    if (averageArray(array1) > averageArray(array2)) {
        return(true);
    } else {
        return(false);
    }
}
console.log(number(array1,array2));


console.log("Question 12:");

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = 60;
let moneyInPocket = 11.00;

// In the if statement I chose 80 to signify that if it is hotter than 80 degrees, then it is considered hot outside.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside >= 80 && moneyInPocket > 10.50) { 
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside,moneyInPocket));

console.log("Question 13:");

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Samantha asked her college professor Mrs. Smith if there's anything she can do to bring up her grade average. Samantha explained how she was struggling her second semester. Mrs. Smith said "If your grade average from semester 1 is higher than your grade average in semester 2, I'll disregard your second semester grades. However, if your semester 1 grade average is equal to or less than semester 2 grades, I'll just have to combine both semesters and input the total average." 

// see below for Samantha's test scores.

const semester1 = [90,82,78]
const semester2 = [43,59,60]
const semesterTotal = semester1.concat(semester2);

let grades = (semester1, semester2) => {
    if (averageArray(semester1) > averageArray(semester2)) {
        return semester1;
    } else {
        return averageArray(semesterTotal);
    }
}
console.log(averageArray(semester1, semester2));