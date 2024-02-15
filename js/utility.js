// show and hide class
function show(elementId) {
    const show = document.getElementById(elementId);
    show.classList.add('hidden');
}
function hide(elementId) {
    const hide = document.getElementById(elementId);
    hide.classList.remove('hidden');
}
//  set background color for keyboard

function setBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove background color 
function removeBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// score update and life reduce

function getTextbyId(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementConvertNumber = parseInt(elementText);
    return elementConvertNumber;
}
// set innerText
function getInnerText(elementId, value) {
    const setText = document.getElementById(elementId);
    setText.innerText = value;

}

// gameOver

function gameOver() {
    show('play-ground-section');
    hide('final-score');

    const lastScore = document.getElementById('score');
    const getLastScore = lastScore.innerText;
    const setFinalScore = document.getElementById('game-score');
    setFinalScore.innerText = getLastScore;

    const lastLetter = document.getElementById('display-number').innerText;
    // console.log('last letter:', lastLetter.innerText);
    removeBgColor(lastLetter);


}
// -----------------------------------------------------------------------------------

// start game 

function startGame() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const random = alphabets[index];

    const displayNumber = document.getElementById('display-number');
    displayNumber.innerText = random;
    console.log(random, displayNumber);

    setBgColor(random);



}


// keyup event handle

function keyUpButton(event) {

    const playerPressed = event.key;

    // exit from game
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get expected press 
    const displayNumber = document.getElementById('display-number');
    const currentAlphabet = displayNumber.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check pressed right key or wrong key


    if (expectedAlphabet === playerPressed) {

        const updateScore = getTextbyId('score');
        const setValue = updateScore + 1;
        // getInnerText('score', setValue);
        getInnerText('score', setValue);

        startGame();
        removeBgColor(expectedAlphabet)
        // console.log(updateScore);

    } else {
        const reduceLife = getTextbyId('life');
        const setLifeValue = reduceLife - 1;
        getInnerText('life', setLifeValue);


        if (setLifeValue === 0) {

            gameOver();

        }


    }


}
document.addEventListener('keyup', keyUpButton);

