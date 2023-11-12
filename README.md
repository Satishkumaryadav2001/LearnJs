# LearnJs
code rapo for javascript series chai our code youtube channels


# Projects related to Dom


## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-5ksmdz?file=index.html)

# Solution Code
  

## Project 1

```javascript


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

//This usecase will give you empty
//const hight = parseInt(document.querySelector('#hight').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height:${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight:${weight}`;
  } else {
    const bmi = (weight / ((height + height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    const binValue = parseInt(bmi);
    console.log(binValue);
    if (binValue === 0.0) {
      BMI_weight_guide.innerHTML = `NO Weight`;
    } else if (binValue > 0.01 && binValue < 19) {
      BMI_weight_guide.innerHTML = `Under Weight`;
    } else if (binValue > 19 && binValue < 25) {
      BMI_weight_guide.innerHTML = `Normal Weight`;
    } else if (binValue >= 26) {
      BMI_weight_guide.innerHTML = `Overweight`;
    } else {
      BMI_weight_guide.innerHTML = 'Not A Number';
    }
  }
});

```

## Project 3
```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```




## Project 4
```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dispalyGuess(guess);
      displayMessage(`Game Over,Random Number was ${randomNumber}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed It Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number Is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number Is TOOO High`);
  }
}
function dispalyGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `[${guess}]  : `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
