let randomDiceNumber1 = 6;
let randomDiceNumber2 = 6;
const dicePic1 = document.getElementById("dice1");
const dicePic2 = document.getElementById("dice2");
dicePic1.setAttribute("src",`./images/dice${randomDiceNumber1}.png` );
dicePic2.setAttribute("src",`./images/dice${randomDiceNumber2}.png`);


document.querySelector("button").addEventListener("click",function(){
    randomDiceNumber1 = Math.floor(Math.random() * 6 + 1);
    randomDiceNumber2 = Math.floor(Math.random() * 6 + 1);
    dicePic1.setAttribute("src",`./images/dice${randomDiceNumber1}.png` );
    dicePic2.setAttribute("src",`./images/dice${randomDiceNumber2}.png`);
    if(randomDiceNumber1>randomDiceNumber2){
        document.querySelector("h1").textContent = "🚩 Play 1 Wins!"
    }
    else if (randomDiceNumber2>randomDiceNumber1){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    }
    else if (randomDiceNumber1===randomDiceNumber2){
        document.querySelector("h1").textContent = "Draw!"
    }
})









