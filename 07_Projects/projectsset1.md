# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-nebmaue7?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1

```javascript

console.log("pritesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

## Project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
    return;
  }

  // BMI calculation
  const bmi = (weight / ((height * height) / 1000)).toFixed(2);

  // BMI Guide
  let message = '';

  if (bmi < 18.6) {
    message = 'Under Weight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = 'Normal Range';
  } else {
    message = 'Overweight';
  }

  // Final Output
  results.innerHTML = `
    <span>Your BMI is <b>${bmi}</b></span><br>
    <span>Status: <b>${message}</b></span>
  `;
});
