console.log("------------NUMBER GUESSING GAME----------\n")
let number=Math.floor(Math.random() * 101);
let times=0;
let guess=0;
while(guess!==number){
    guess=parseInt(prompt("\nGuess a number: "));
    times++;
    if(guess<1){
        console.log("\nInvalid Guess")
    }
    else if(guess>number){
        console.log("\nnumber is lesser than your guessed number")
    }
    else if(guess===number){
        console.log("\nCongratulations!! You guessed the correct number")
    }
    else{
        console.log("\nnumber is greater than your guessed number\n")
    }
}
times=100-times;
console.log("\nYOUR SCORE IS",times)