'use strict'
// user welcome message
let firstName = prompt("Hey! What's your name?");
alert("Hey " + firstName + "!");

let userScore = 0;
let totalQuestions = 7;
let totalUserScore = 0;
let failingScore = 0;

// getting to know the user
function nosyApp() {
  let age = prompt("How old are you?");
  alert("WOW " + age + " you're really getting up there huh");

  let live = prompt("Where do you live?");
  alert(live + "? Sounds nice.");


  let time = prompt("What time zone do you live in?");
  var ariTime = ('eastern');

  if (time.toLowerCase() === ariTime.toLowerCase() || time.toLowerCase() === 'eastern time zone') {
    alert("Hey! Same here!");
  }
  else {
    alert("I don't live in " + time + ". I wonder what our time difference is");
  }

  let sleep = prompt("what time do you usually sleep?");
  alert(sleep + "? Well I hope you at least get a good nights sleep");
  document.write("Hi " + firstName + " you are " + age + ", you live in " + live + " operating on " + time + " but you sleep at " + sleep + " your time. Glad to have you in class!");
}
nosyApp();
// user gets to know me, my yes or no questions. 
// function running through the yes or no questions

function YorN() {

  const questions = [

    'Do I love anime?',
    'Am I a Sagittarius?',
    'Am I over 25?',
    'Do I have dogs?',
    'Was I born in Ohio?',

  ];


  // for loop running through questions in array

  for (let i = 0; i < questions.length; i++) {

    let response = prompt(questions[i]);

    if (i < 2) {
      if (response.toLowerCase() == "yes") {
        alert('omg you know me so well');
        userScore++
      }
      else {
        alert('no dude');
      }
    }
    else {
      if (response.toLowerCase() == "no") {
        alert('omg you know me so well');
        userScore++
      }
      else {
        alert('no dude');
      }
    }

  }

}

YorN();


// guessing game function

function numberGame() {

  let allowedAttempts = 4;
  let correctGuess = 6;
  let userAttempts = 0;


  while (userAttempts < allowedAttempts) {

    let userGuess = prompt('Guess a number 1 - 10');

    if (userGuess == correctGuess) {
      alert('You got it kid!');
      userScore++
      break;
    }
    else if (userGuess < correctGuess) {
      alert('Nope, too low! Guess again!');
      userAttempts++;
    }
    else if (userGuess > correctGuess) {
      alert('Nope, too high! Guess again');
      userAttempts++;
    }
    alert('You have ' + (allowedAttempts - userAttempts) + ' guesses left');
  }

}
numberGame();


function trivia() {

  let allowedTriviaAttempts = 6;
  let userTriviaAttempts = 0;

  let favFood = [
    'cajun island',
    'arepittas',
    'cajun boil bar',
    'fork in nigeria',
    'funny greek',
    'wingstop',
  ]

  for (let i = 0; i < favFood.length; i++) {

    while (userTriviaAttempts < allowedTriviaAttempts) {

      let foodGuess = prompt('What is one of my favorite food spots?');
      let guessesRemaining = allowedTriviaAttempts - userTriviaAttempts;

      if (favFood.includes(foodGuess) == true) {
        alert('Wow you know me so well, ' + foodGuess + ' is one of my favorite food spots. And it only took you ' + userTriviaAttempts + ' attempt.');
        userScore++
        return foodGuess;
      } else {
        alert('Nope try again, you have ' + guessesRemaining + ' guesses remaining.');
        userTriviaAttempts++
        guessesRemaining--

      }
    }
  }
}
trivia();

totalUserScore += userScore

if (totalUserScore > 0) {
  alert('Congrats! You did not fail. Your score is ' + totalUserScore + ' out of ' + totalQuestions + '.');
} else {
  alert('Wow I guess you dont really know me that well. Your score is ' + totalUserScore + ' out of ' + totalQuestions + '. Take a look at my bio and see if you can get a better score!');
}
document.write(' Your score was ' + totalUserScore + ' out of ' + totalQuestions + '.'); 