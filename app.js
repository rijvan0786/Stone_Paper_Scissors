let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Stone";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    // console.log('WIN')
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win.`
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
    // setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); ES6 Function
}


function lose(computerChoice, userChoice) {
    computerScore++;
    // console.log('LOSE')
    // console.log(computerScore);
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const computerChoice_div = document.getElementById(computerChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lose.`
    computerChoice_div.classList.add('red-glow');
    setTimeout(function(){computerChoice_div.classList.remove('red-glow')}, 300);
    // setTimeout(() => computerChoice_div.classList.remove('red-glow'), 300); ES6 Function
}

function draw(userChoice, computerChoice) {
    // console.log("DRAW");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} can't beat ${convertToWord(computerChoice)}${smallCompWord}. It's Draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 300);
    // setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300); ES6 Function
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice)
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main()
