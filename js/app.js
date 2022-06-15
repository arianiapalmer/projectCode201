'use strict'
// user welcome message
let firstName = prompt("Hey! What's your name?");
console.log("users name is " + firstName);
alert("Hey " + firstName + "!");

// getting to know the user
function nosyApp() {
  let age = prompt("How old are you?");
  console.log("user is " + age);
  alert("WOW " + age + " you're really getting up there huh");

  let live = prompt("Where do you live?");
  console.log('user lives in ' + live);
  alert(live + "? Sounds nice.");


  let time = prompt("What time zone do you live in?");
  var ariTime = ('eastern');
  console.log("the user's time zone is " + time);

  if (time.toLowerCase() === ariTime.toLowerCase()) {
    alert("Hey! Same here!");
  }
  else {
    console.log('user does not live in the same time zone as ari');
    alert("I don't live in " + time + ". I wonder what our time difference is");

  }

  let sleep = prompt("what time do you usually sleep?");
  console.log('the user sleeps at ' + sleep);
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
    console.log(response);

    if (i < 2) {
      if (response.toLowerCase() == "yes") {

        console.log('user answered correctly');
        alert('omg you know me so well');

      }
      else {
        console.log('user answered incorrectly');
        alert('no dude');
      }
    }
    else {
      if (response.toLowerCase() == "no") {

        console.log('user answered correctly');
        alert('omg you know me so well');

      }
      else {
        console.log('user answered incorrectly');
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

    console.log('user guessed ' + userGuess);

    alert('You have ' + (allowedAttempts - userAttempts) + ' guesses left');
    console.log('user has ' + (allowedAttempts - userAttempts) + ' guesses left');

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

  while (userTriviaAttempts < allowedTriviaAttempts) {
    let foodGuess = prompt('What is one of my favorite food spots?');
    console.log('foodGuess is ', foodGuess);

    for (let i = 0; i < favFood.length; i++) {

      if (favFood.includes(foodGuess) == true) {

        console.log('i is ', i);
        console.log('foodguess is : ', foodGuess);
        console.log('favFood[i] is ', favFood[i]);

        alert('Wow you know me so well');
        // return foodGuess;        
        break;
      } else {
        alert('Nope try again');
        console.log('user did not answer correctly');
        userTriviaAttempts++
      }
      userTriviaAttempts = 6;
    }
  }
}
trivia();
