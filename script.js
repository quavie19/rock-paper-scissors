const items = ["rock", "paper", "scissors"];
const playerSelection = prompt("Please choose rock, paper, or Scissors");
const computerSelection = computerPlay(items);

//  Computer picks random selection of Rock, Paper, or Scissors

function computerPlay(items) {
	return items[Math.floor(Math.random() * items.length)];
}
// console.log(computerPlay(items));

//  Game Round 1
// Player inputs selection of rock, paper, or scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Its a tie!";
	}
	// console.log(roundOne(playerSelection, computerSelection));
	// computer picks random selction of rock paper or scissos
	// if computer and player inputs same selction its a tie
	// else if  player selects rock and computer selects scissors player wins. rock beats scissors
	else if (playerSelection == "rock" && computerSelection == "scissors") {
		return "You win! Rock beats Scissors ";
	}

	// else if player selects rock and computer selects paper. player loses. paper beats rock
	else if (playerSelection == "rock" && computerSelection == "paper") {
		return "Sorry! paper beats rock";
	}
	// else if player selects scissors and computer selects rock. player loses. rock beats scissors
	else if (playerSelection == "scissors" && computerSelection == "rock") {
		return "Sorry! Rock beats Scissors ";
	}
	// else if player selects scissors and computer selects paper. player wins. scissors beats paper
	else if (playerSelection == "scissors" && computerSelection == "paper") {
		return "You win! Scissors beats paper ";
	}
	// else if player selects paper and computer selects rock. player wins. paper beats rock
	else if (playerSelection == "paper" && computerSelection == "rock") {
		return "You win! Paper beats rock ";
	}
	// else if player selects paper and computer selects scissors. player loses. scissors beats paper
	else if (playerSelection == "paper" && computerSelection == "scissors") {
		return "Sorry! Scissors beats paper";
	}
	// if no selection made, please input selection
	else {
		return "Please input selection";
	}
}

console.log(playRound(playerSelection, computerSelection));

// game function plays a 5 round game, keeps score, and reports winner
//  function game(playRound) {
// 	 for (let i = 0; i < 5; i++)

// 	 let playerWins = 0;
// 	 let comptuerWins = 0 ;
// 	 let result = ();

// if playerSelection
// }
