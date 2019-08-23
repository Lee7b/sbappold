module.exports = {
    startGame(userChoice) {
        //Generate computer choice
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomNumber];
        let result = '';

        //Determine the winner
        if (userChoice === computerChoice) {
            result = 'TIE';
        }
        
        switch (userChoice + computerChoice) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                result = 'User Wins';
                break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                result ='Computer Wins';
                break; 
            default: break;
        }

        return [userChoice, computerChoice, result];
    }
}
