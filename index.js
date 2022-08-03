var state = {board: [], currentGame: [], savedGame: []};

function start(){
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(5);
    addNumberToGame(15);
    addNumberToGame(51);
    addNumberToGame(52);
    addNumberToGame(53);
    addNumberToGame(0);
    addNumberToGame(62);

    console.log(state.currentGame);
}

function addNumberToGame(numberToAdd){
    if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Numero inválido', numberToAdd);
    return;
    }

    if (state.currentGame.length === 6) {
        console.error('Jogo completo, não cabem mais números');
        return;
    }
    state.currentGame.push(numberToAdd);
}

start();