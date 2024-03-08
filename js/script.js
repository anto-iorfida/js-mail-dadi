// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// cliccare il tasto per generare i numeri casuali
const nutGenerate = document.querySelector('#nut-game')
console.log(nutGenerate)

// dare funzione click al tasto 
nutGenerate.addEventListener('click' , function(){
    // generare un numero random per pc 
    let numRandomPc = Math.floor(Math.random() * 6) + 1;
    console.log(numRandomPc)
    // generare un numero random per user
    let numRandomUser = Math.floor(Math.random() * 6) + 1;
    console.log(numRandomUser)
    // dire che il numero piu grande generato vince
    let messageWinner = '';
    if (numRandomPc > numRandomUser) {
        messageWinner = 'Ha vinto il pc';
    }else{
        messageWinner = 'Ha vinto user';
    }

    console.log(messageWinner)
    
})

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
