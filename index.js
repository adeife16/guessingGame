// guessing game function
function guessingGame(user){
  console.log("Hey there "+user);
  let range = 2; 
  let stage = range - 1;
  
  while(true){
  let num = Math.floor(Math.random() * range) + 1; //between 1 and 3
    console.log(num) //for testing purpose
  console.log("Stage "+ stage);
  let guess = prompt("Guess a number between 1 and " + range);
    if(guess == num){
      console.log("Correct!");
      stage++;
      range++;
    }
    else{
      console.log("Incorrect, Game Over!")
      break;
    }  
  }
}

// program starts here
let user = null;
while(user === null || user === " " || user  === ""){ //prompt user for name
  user = prompt("Please enter your name");
}
guessingGame(user);