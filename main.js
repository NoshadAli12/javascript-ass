// Ask the user for two numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the inputs to float (in case the user enters decimal numbers)
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Add the numbers together
let sum = num1 + num2;

// Display the result using string interpolation
alert(`The sum of ${num1} and ${num2} is ${sum}.`);


// Ask the user for their name and the total purchase amount
let name = prompt("Enter your name:");
let purchaseAmount = prompt("Enter the total purchase amount:");

// Convert the purchase amount to float
purchaseAmount = parseFloat(purchaseAmount);

// Calculate the discount (10%)
let discount = 10;
let discountAmount = (purchaseAmount * discount) / 100;

// Calculate the final amount after applying the discount
let finalAmount = purchaseAmount - discountAmount;

// Display the result using string interpolation
alert(`${name}, your total after applying the 10% discount is $${finalAmount.toFixed(2)}.`);


// Ask the user for their favorite animal
let favoriteAnimal = prompt("What is your favorite animal?");

// Respond with a positive comment using string interpolation
if (favoriteAnimal.toLowerCase() === "cat") {
  alert(`Wow, cats are amazing creatures!`);
} else {
  alert(`Wow, ${favoriteAnimal}s are amazing creatures!`);
}
