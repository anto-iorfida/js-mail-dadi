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
    
    // generare un numero random per user
    let numRandomUser = Math.floor(Math.random() * 6) + 1;
    
    // dire che il numero piu grande generato vince
    let messageWinner = '';
    if (numRandomPc > numRandomUser) {
        messageWinner = 'PC';
    }else{
        messageWinner = 'USER';
    }
// far visuallizzare allutente tutti i risultati
const visualNumUser = document.querySelector('#num-user')
const visualNumPc = document.querySelector('#num-pc')
const visualResult = document.querySelector('#vincitore')
console.log(visualResult)
visualNumUser.innerHTML =`Numero dell'utente è : ${numRandomUser}`
visualNumPc.innerHTML = ` Numero dell'pc è : ${numRandomPc}`
visualResult.innerHTML = `THE WINNE IS : ${messageWinner} `
})

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



// creo bottone per avere interazone
const buttonClick = document.querySelector('#btn-var')
buttonClick.addEventListener('click', function(){

// chiedere allutente la sua email 
const mailUser = document.querySelector('#insert-mail').value ;
console.log(mailUser)
// creare lista email elit 
const listEmail = ['andre12@hotmail.com', 'mariapri@hotmail.com' , 'user98@hotmail.com', 'mattiband@hotmail.com', 'ciaociao@hotmail.com']


// confrontare mail con la lista di mail che puo accedere
let mailVerification = false;

// Scorrere l'elenco delle email
for(let i = 0; i < listEmail.length; i++) {
    const emailConsideration = listEmail[i];

    // Per ogni email:
    // Controllo se la squadra attuale nel ciclo è uguale a quella dell'utente
    // Se trovo la squadra nella lista -> mi appunto che l'ho trovata (nella viariabile)
    if(emailConsideration === mailUser) {
        mailVerification = true; 
    }

    
}
// Alla fine del ciclo se nella variabile mailVerification è vero stampo "puo entrare"
// altrimenti stampo "non puoi entrare"

let messageVerification = document.querySelector('#verification')



if(mailVerification === true) {
    messageVerification.classList.add('entra')
} else {
    messageVerification.classList.add('non-entra')
}


})