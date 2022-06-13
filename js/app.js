'use strict'
// user welcome message
let firstName = prompt("Hey! What's your name?");

console.log("users name is " + firstName);

alert("Hey " + firstName + "!");

// getting to know the user

let age = prompt("How old are you?");{

    console.log("user is " + age)

    alert("WOW " + age + " you're really getting up there huh");

}

let live = prompt("Where do you live?");{

    console.log('user lives in ' + live)

    alert(live + "? Sounds nice.");

}

let time = prompt("What time zone do you live in?");{
  var ariTime = ('eastern');

    console.log("the user's time zone is " + time)

    if(time.toLocaleLowerCase() === ariTime.toLocaleLowerCase()){

        alert ("Hey! Same here!");

       }

       else{
          console.log('user does not live in the same time zone as ari')

          alert("I don't live in " + time + ". I wonder what our time difference is");

        }

}

let sleep = prompt ("what time do you usually sleep?");{

    console.log('the user sleeps at ' + sleep)

  alert (sleep + "? Well I hope you at least get a good nights sleep");

}

// user gets to know me, my yes or no questions. 



// function running through the yes or no questions

function YorN(){
  
  let questions = [

    'Do I love anime?',
    'Am I a Sagittarius?',
    'Am I over 25?',
    'Do I have dogs?',
    'Was I born in Ohio?',
    
  ];


  // for loop running through questions in array

  for ( let i = 0; i < questions.length; i++){

    confirm(alert(questions[i]));
     // asking questions through an alert, which if questions 0,1, it is then confirmed and user is given a response

    if (questions.length <= 3) {
      
      console.log('user answered correctly')
      alert ('omg you know me so well');
    } 
      else if (questions[i]){
        console.log('user answered correctly');
        alert ('no dude');
      }

    questions++

  }

}

YorN();

document.write("Hi " + firstName + "you are " + age + ", you live in " + live + "operating on " + time + " but you sleep at " + sleep + " your time. Glad to have you in class");

