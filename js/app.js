'use strict'
// user welcome message
let firstName = prompt("Hey! What's your name?");

console.log("users name is " + firstName);

alert("Hey " + firstName + "!");

// gettinging to know the user

let age = prompt("How old are you?");{

    console.log("user is " + age)

    alert("WOW " + age + " you're really getting up there huh");

}

let live = prompt("Where do you live?");{

    console.log('user lives in ' + live)

    alert(live + "? Sounds nice.");

}

let time = prompt("What time zone do you live in?");{

    console.log("the user's time zone is " + time)

    if(time == "eastern"){

        alert ("Hey! Same here!");

       }

       else{
          console.log('user does not live in the same time zone as ari')

          alert("I don't live in " + time + " I wonder what our time difference is");

        }

}

let sleep = prompt ("what time do you usually sleep?");{

    console.log('the user sleeps at ' + sleep)

  alert (sleep + " Well I hope you at least get a good nights sleep");

}

// user gets to know me, my yes or no questions

function YorN(){

  let questions = [
    'Am I over 25?',
    'Do I have dogs?',
    'Was I born in Ohio?',
    'Do I love anime?',
    'Am I a Sagittarius?',
  ]
  prompt(questions);
    questions[1] = false;
    questions[2] = false;
    questions[3] = false;
    questions[4] = confirm;
    questions[5] = confirm;
    for (let questions = 0; questions < questions.length; questions++){

    if(questions = false)
    alert ('You just won brownie points!');
    else {
      if (confirm)
      alert ('Wow, so am I invisible to you?');
    }
  }

  // yes = Boolean(false);
  // no = Boolean(true);\

  // if (ariAge) = false; 
  // alert 

  // if ariPet
  // if ariBorn
  // if ariLuv
  // if ariSag
  
}




YorN();

//document.write("Hi " + firstName + "you are " + age + ", you live in " + live + "operating on " + time + " but you sleep at " + sleep + " your time. Glad to have you in class :\)");

