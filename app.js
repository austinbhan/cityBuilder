// import functions and grab DOM elements //Update DOM Elements to Match
const foodDropDown = document.getElementById('foodDropDown');
const transportDropDown = document.getElementById('transportDropDown');
const parkingDropDown = document.getElementById('parkingDropDown');

const foodPic = document.getElementById('foodsie');
const transportPic = document.getElementById('transportie');
const parkPic = document.getElementById('parkingie');

const textField = document.getElementById('textField');
const textButton = document.getElementById('textButton');

const selectionRecord = document.getElementById('selectionRecord');
const textFieldRecord = document.getElementById('textFieldRecord');

// let state

let foodChange = 0;
let transportChange = 0;
let parkingChange = 0;

let textArray = [0];

// set event listeners

foodDropDown.addEventListener('change', () => {
   // get user input
  console.log('you selected', foodDropDown.value);
  // use user input to update state 
  foodChange++;
  // update DOM to reflect the new state
  foodPic.style.backgroundImage = `url('./assets/${foodDropDown.value}-food.png')`;
});

transportDropDown.addEventListener('change', () => {
  // get user input
  console.log('you selected', transportDropDown.value);
  // use user input to update state 
  transportChange++;
  // update DOM to reflect the new state
  transportPic.style.backgroundImage = `url('./assets/${transportDropDown.value}-transport.png')`;
});

parkingDropDown.addEventListener('change', () => {
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

});