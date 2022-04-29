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
    displayStats();
});

transportDropDown.addEventListener('change', () => {
  // get user input
    console.log('you selected', transportDropDown.value);
  // use user input to update state 
    transportChange++;
  // update DOM to reflect the new state
    transportPic.style.backgroundImage = `url('./assets/${transportDropDown.value}-transport.png')`;
    displayStats();
});

parkingDropDown.addEventListener('change', () => {
  // get user input
    console.log('you selected', parkingDropDown.value);
  // use user input to update state 
    parkingChange++;
  // update DOM to reflect the new state
    parkPic.style.backgroundImage = `url('./assets/${parkingDropDown.value}-park.png')`;
    displayStats();
});

// Display Stat Function
function displayStats() {
    selectionRecord.textContent = `Favorite food selection ${foodChange}, favorite transport ${transportChange} times, and favorite park ${parkingChange} times.`;
}

// Text Input Button 
textButton.addEventListener('click', () => {
  // get the value of the catchphrase input
    let textFieldValue = textField.value;
  // push the new catchphrase to the catchphrase array in state
    textArray.push(textFieldValue);
    console.log(textArray);
  // clear out the form input's value so it's empty to the user
    textField.value = ' ';
  // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayTextInputs();
});

// A Loop Function That will push text content into the history <div>.
function displayTextInputs() {
// clear out the DOM for the currently displayed catchphrases
    textFieldRecord.textContent = ' ';
// loop through each catchphrase in state
// and for each catchphrase
// create an HTML element with the catchphrase as its text content
// and append that HTML element to the cleared-out DOM
}
  