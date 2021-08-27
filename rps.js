let playerScore = 0;
let cpuScore = 0;
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function gameOver() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore ++

            if (playerScore == 1) {
                result += "<br>Don't get cocky, it's gonna get rocky" 
            }
            if (playerScore == 2) {
                result += "<br>Hmmm, yeah, I see you getting better, kick to the limit in order to get her" 
            }            
            if (playerScore == 3) {
                result += "<br>its gonna get harder now" 
            }
            if (playerScore == 4) {
                result += "<br>Come on now, why don't you follow my words, because we're almost done I'll make it easy at first" 
            }
            if (playerScore == 5) {
                result += "<br>that's it for today, you can go on to the next stage" 
                gameOver()
            }


        } else if (playerSelection == computerSelection) {
            result = ('you must like Tae bo, tie, bro')
        } else {
            cpuScore ++
            if (cpuScore == 1) {
                result += "<br>Gross, you stink"
            }
            if (cpuScore == 2) {
                result += "<br>Eww, you smell worse"
            }
            if (cpuScore == 3) {
                result += "<br>how do you stink so bad"
            }
            if (cpuScore == 4) {
                result += "<br>I think I'm gonna be sick dude"
            }
            if (cpuScore == 5) {
                result += "<br>PUKES"
                gameOver()
            }

        }
        document.getElementById('result').innerHTML = result
        PlayerScoreP.textContent = `Player: ${playerScore}`
        cpuScoreP.textContent = `CPU: ${cpuScore}`

        return
}

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//Interface

const scoreInfo = document.getElementById('scoreInfo')
const PlayerScoreP = document.getElementById('playerScore')
const cpuScoreP = document.getElementById('cpuScore')

