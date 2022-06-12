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

// asking questions through an alert, which if questions 0,1, it is then confirmed and user is given a response
    // alert(questions[i])
    alert(confirm(questions[0,1]));
    alert(confirm(questions[2,3,4]));

    if (questions [ 0, 1]) {
      console.log('user answered correctly')
      alert ('omg you know me so well');
    } 
      else if (questions[2.3,4]){
        console.log('user answered correctly')
        alert ('no dude')
      }
    
    // alert(questions[2,3,4])
    // prompt(questions);{

    //   if(questions = true ){

    //     console.log('user answered correctly');

    //     confirm(questions);
        
    //     alert('You just won brownie points!');
    //   }
      
    //     else if (questions = false){
    //       console.log('user did not answer correctly');
    //       alert('Wow, so am I invisible to you?');

    //     }
    // }
    questions++

  }

}

YorN();

//document.write("Hi " + firstName + "you are " + age + ", you live in " + live + "operating on " + time + " but you sleep at " + sleep + " your time. Glad to have you in class :\)");

