// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e 
// l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const card = document.querySelector('#random-numbers');
console.log(card);
const timerContainer = document.querySelector('#timer-container');
const userCorrectNumbers = document.querySelector('#user-numbers');

// creo un array con 5 numeri randomici
let randomNumbers = [];
while (randomNumbers.length < 5) {
    let randomNum = getRndInteger(1, 5);
    if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
    }
}
console.log(randomNumbers);

// lo pusho del dom per mostrarli all'utente
card.innerHTML = randomNumbers;

// faccio partire un timer di 30 sec
let timer = 1;
let correctNumbers = [];
timerContainer.innerHTML = `${timer} sec`;
const clock = setInterval(function () {
    --timer;
    timerContainer.innerHTML = `${timer} sec`;
    // quando il timer arriva a 0 stoppo il timer 
    if (timer == 0) {
        clearInterval(clock);
        timerContainer.innerHTML = 'Inserisci i numeri';

        // finito il timer faccio scomparire l'array dal dom
        card.innerHTML = '';

        // chiedo all'utente di inserire i numeri corretti
        for (let i = 0; i < randomNumbers.length; i++) {
            thisNumber = parseInt(prompt('Inserisci i numeri'));
            // inserisco i numeri dell'utente in un array solo se corretti
            if (randomNumbers.includes(thisNumber) && !correctNumbers.includes(thisNumber)) {
                correctNumbers.push(thisNumber);
            }
        }
        console.log('correct numbers:', correctNumbers);
        // output all'utente
        // timerContainer.innerHTML = 'I numeri che hai indovinato sono:';
        // card.innerHTML = randomNumbers;
        userCorrectNumbers.innerHTML = correctNumbers;
    }

}, 1000)




// #region FUNCTIONS

// 1
// genera un numero random tra min e max non ancora presente nella blackList
// min -> numero minimo da generare
// max -> numero massimo da generare
// blackList -> array di numeri che sono già nella griglia
// return -> num intero valido compreso tra min e max
function getRandomUniqueNumber(min, max, blackList) {
    // parte dal presupposto che il num non sia valido
    // se il num generato random non è presente allora è valido
    // return del num valido

    let numberIsValid = false;
    let randomNumber;

    while (!numberIsValid) {

        randomNumber = getRndInteger(min, max);

        if (!blackList.includes(randomNumber)) {

            numberIsValid = true;
        }
    }
    return randomNumber;
}

// 2
// Ritorna un numero random tra il minimo e il massimo (inclusi)
// min -> numero intero che rappresenta il numero minimo da cui partire per generare il numero random
// max -> numero intero che rappresenta il numero massimo da cui partire per generare il numero random
// return -> numero intero random tra il minimo e il massimo
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// #endregion