
const bannerHTML=
        `<div class="container">
        <div class="card">
            <div class="card-title">
                <h1>Guess the Number!</h1>
            </div>
            <div class="card-description">
                <label for="text" class="card-descrip">I'm thinking of a number between 1 and 5. Can you guess it?</label>
            </div>



            <form action="">
                <div class="inputNumber">
                <input placeholder="Enter your guess (1-5)" type="number" min="1" max="5" required>
            </div>
            <div class="button1">
                <button id="check" type="submit">Submit Guess</button>
            </div>
            <div class="button2">
                <button type="reset">Play Again</button>
            </div>
            </form>



            <div class="comment">
                <p class="resultText"></p>
                <p class="remainingAttempts"></p>
            </div>
      </div>
    </div>`
    ;
    document.body.insertAdjacentHTML('beforeend',bannerHTML);





let totalAttempts=5;
let attempts=0;
let totalWon=0;
let totalLost=0;


const card=document.querySelector(".card")
const form= document.querySelector('form');
const guessingNumber=form.getElementsByClassName('inputNumber');
const checkButton= form.querySelector('#check');
const resultText=document.querySelector('.resultText');
const remainingAttempts= document.querySelector('.remainingAttempts');
const lostWin=document.createElement('p');


form.addEventListener('submit',function(event){
    event.preventDefault();
    attempts ++;
    if(attempts>5){
        guessingNumber.disabled=false;
        checkButton.disabled = false;

    }else{

    let guessNumber=Number (guessingNumber.value);
    checkResult(guessNumber)

    }
    guessingNumber.value = '';

})
function checkResult(guessingNumber){ 
    let randomNumber=getRandomNumber();

    if(guessingNumber===randomNumber){
        resultText.innerHTML = `won`;
        totalWon ++;  
    }else{
        resultText.textContent=`Try again. Number was: ${randomNumber}`;
        totalLost ++;
    }
    lostWin.innerHTML=`Won: ${totalWon}.Lost:${totalLost}`;
    card.appendChild(lostWin);

}

function getRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}