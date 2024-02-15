function play() {
    // show and hide section
    show('home-section');
    hide('play-ground-section');
    show('final-score');

    getInnerText('life', 5);
    getInnerText('score', 0);
    

    startGame();
}

