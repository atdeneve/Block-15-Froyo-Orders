
//creating a prompt for user to enter froyo flavors 
const input = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);


let flavorArray = input.split(',');
console.log(flavorArray);

let flavorCount = {};
function flavorCounter (flavorArray) {
// let flavorCount = {};
for (let i = 0; i < flavorArray.length; i++) {
  const currentFlavor = flavorArray[i];
  if(flavorCount[currentFlavor]) {
    flavorCount[currentFlavor]++;
  } else {
    flavorCount[currentFlavor] = 1;
  }
}
// console.log('Flavor count:', flavorCount);
return flavorCount;
}

console.log(flavorCounter(flavorArray));
const flavorString = Object.values(flavorArray);

function flavorLogger() {
  const flavorList = document.querySelector('.flavors-list');
  flavorList.innerHTML = `Here is your flavor list! ${flavorString}`
}



