function show(elementId) {
    const show = document.getElementById(elementId);
    show.classList.add('hidden');
}
function hide(elementId) {
    const hide = document.getElementById(elementId);
    hide.classList.remove('hidden');
}

function startGame() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    console.log(index);
}