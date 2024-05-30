const dice=() =>{
    return Math.floor(Math.random() * 6) + 1;
}

const rollDice=()=> {
    let diceElement = document.getElementById('dice');
    let diceImage = document.getElementById('diceImage');

    let diceImages = [
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-1.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-2.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-3.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-4.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-5.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/skoll/inverted-dice-6.svg'
    ];

    let rollCount = 5; 
    let rollInterval = setInterval(()=> {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        diceImage.src = diceImages[randomNumber - 1];
        rollCount--;

        
        if (rollCount === 0) {
            clearInterval(rollInterval);

            let finalNumber = dice();
            diceImage.src = diceImages[finalNumber - 1];
        }
    }, 500);
}