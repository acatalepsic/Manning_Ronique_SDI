/*
 Ronique Manning
 SDI Section 03
 Activity: Expression Worksheet
 01-13-2015
 */

//Calculate Sparky's Age
var humanAge = 10;
var aging = 7;

//Multiply human age by dog age
var dogAge = humanAge * aging;

//Print out Sparky's dog age
console.log("Sparky is "+ humanAge +" years old which is "+ dogAge +" in dog years.")



//Calculate how much of the pizza party-goers will get at the party
var pizza = 10;
var people = 25;
var slices = 8;

//Find the total number of slices by multiplying the number of slices by the number of pizzas.
var slicesTotal = pizza * slices;

// Divide total number of slices into the amount of people attending.
var perPerson = pizza * slices / people;

//Print out the number of slices each person gets
console.log("Each person ate "+ slicesTotal +" slices of pizza at the party.")



//Calculate the amount of pizza will be leftover for Sparky to snack on
var pizza = 10;
var people = 25;
var slices = 8;
var slicesTotal = 80;

//Use Modulo to find the remaining slices of pizza leftover
var leftovers = slicesTotal % people;

//Print out the amount of leftovers for Sparky to enjoy
console.log("Sparky got "+ leftovers +" slices of pizza.")



//Calculate the average amount of money spent weekly grocery shopping for 5 weeks
var groceries = [150, 300, 150, 395, 290]

//Add the grocery costs and then divide the grocery cost by 5.
var groceryCost = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4]
var average = groceryCost / 5

//Print out average grocery cost.
console.log("You have spent a total of $"+ groceryCost +" over 5 weeks. That is an average of $"+ average +" per week.")
