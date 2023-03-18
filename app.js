const computerChoicedisplay = document.getElementById('computer-choice')
const userChoicedisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const possiblechoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) => {

    userChoice = e.target.id
    userChoicedisplay.innerHTML = userChoice
    generateComputerchoice()
    getresult()
}))

function generateComputerchoice(){
    const randomnumber = Math.floor(Math.random()*3) +1
    console.log(randomnumber)
    if(randomnumber ==1){
        computerChoice = 'rock'
        computerChoicedisplay.innerHTML = computerChoice
    }
    if(randomnumber ==2){
        computerChoice = 'paper'
        computerChoicedisplay.innerHTML = computerChoice
    }
    if(randomnumber ==3){
        computerChoice = 'scissor'
        computerChoicedisplay.innerHTML = computerChoice
    }

}
function getresult(){
    if(computerChoice === userChoice){
        result = "its a draw"
    }
    if(computerChoice ==='rock' && userChoice === "paper"){
        result = "woooah ! you win the game"
    }
    if(computerChoice ==='paper' && userChoice === "scissor"){
        result = "woooah ! you win the game"
    }
    if(computerChoice === 'scissor' && userChoice === "rock"){
        result = "woooah ! you win the game"
    }
    if(userChoice ==='rock' && computerChoice === "paper"){
        result = "oops! you lose the game"
    }
    if(userChoice ==='paper' && computerChoice === "scissor"){
        result = "oops! you lose the game"
    }
    if(userChoice === 'scissor' && computerChoice === "rock"){
        result = "oops! you lose the game"
    }
    resultdisplay.innerHTML = result


}
