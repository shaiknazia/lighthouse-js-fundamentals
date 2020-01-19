// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

// const temperature = 15;

// //Having multiple options using if, else if and else
// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }
// console.log("Now you're ready to go outside!");

//Using logical operators
const isCitizen = true;
const age = 7;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
else {
  console.log("you are not eligible to vote")
}

let temperature = 60;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
else {
  console.log("whatever")
}

let raining = false;
if (!raining) {
  console.log("Leave your umbrella at home!");
}