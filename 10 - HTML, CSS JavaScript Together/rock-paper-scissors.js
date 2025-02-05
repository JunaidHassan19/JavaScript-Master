let score = JSON.parse(localStorage.getItem('score'));

    if(score === null) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }

    updateScoreElement();

    function playGame(playerMove) {
      const computerMove = (pickComputerMove());
      let result = '';

      if(playerMove === 'Scissors') {
        if(computerMove === 'Rock') {
          result = 'You lose.'; 
        } else if (computerMove === 'Paper') {
          result = 'You win.';
        } else if (computerMove === 'Scissors') {
          result = 'Tie.';
        }

      } else if(playerMove === 'Paper') {
        if(computerMove === 'Rock') {
          result = 'You win.'; 
        } else if (computerMove === 'Paper') {
          result = 'Tie.';
        } else if (computerMove === 'Scissors') {
          result = 'You lose.';
        }
        
      } else if(playerMove === 'Rock') {
          if(computerMove === 'Rock') {
          result = 'Tie.'; 
        } else if (computerMove === 'Paper') {
          result = 'You lose.';
        } else if (computerMove === 'Scissors') {
          result = 'You win.';
        }
      }


      if(result === 'You win.') {
        score.wins += 1;
      } else if(result === 'You lose.') {
        score.losses += 1;
      } else if(result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result')
       .innerHTML = result;

      document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
    computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    }
     
    //   alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}
    //   wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
    // }

    function updateScoreElement () {
      document.querySelector('.js-score')
      .innerHTML =`wins: ${score.wins} - losses: ${score.losses} - ties: ${score.ties}`;
    }


    function pickComputerMove () {
      const randomNum =  Math.random();
      if(randomNum >= 0 && randomNum < 1 / 3) {
         computerMove = ('Rock');
      } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
         computerMove= ('Paper');
      } else if (randomNum >= 2 / 3 && randomNum < 1) {
         computerMove = ('Scissors');
      }
        
         return computerMove; 
    }