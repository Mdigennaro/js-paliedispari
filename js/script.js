//**Palidroma**
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//chiedo la parola
const parolaUtente = prompt('Inserisci una parola');


//fare funzione per testare che la parola sia palindroma

function checkPalindrome(parola) {

  const caratteri = parolaUtente.length;

  for (let i = 0; i < caratteri / 2; i++) {

      if (parolaUtente[i] !== parolaUtente[caratteri - 1 - i]) {
          return 'La parola inserita non è un palindromo';
      }
  }
  return 'La parola inserita è un palindromo';
}

const value = checkPalindrome(parolaUtente);

console.log(value);

//**Pari e Dispari**
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Chiedere se si vuole pari o dispari
const gioco = prompt('Pari o Dispari?');
console.log('Hai scelto:', gioco);

//Chiedere un numero da 1 a 5
let numeroInserito = prompt('Scegli un numero da 1 a 5');
console.log('Hai scelto il numero ',numeroInserito);

//Estrarre il numero random il numero del computer
const numeroCpu = getNumeroCasuale(1, 5);
let numCpu = numeroCpu

console.log('Il numero del computer è ', numCpu);


//sommiamo i due numeri
let mioRisultato = calcolo(numeroInserito, numCpu);
console.log('Il risultato dei due numeri è: ',mioRisultato);

//Stabilisco se la somma è pari o dispari
const risultato = pariODispari(mioRisultato);
console.log('Pari o dispari:',risultato);

//dichiariamo il vincitore
if (gioco === risultato) {
  console.log('Hai vinto');
}else{
  console.log('Ha vinto il computer');
}






//function per stabilire se il numero è pari o dispari
function pariODispari(n) {

  if (n % 2 === 0) {

    return 'pari';

  }

  return 'dispari';

}





//function per sommare
function calcolo(num1,num2) {
  
  let risultato = +num1 + +num2;
  return risultato;

}

//function per numero random da 1 a 5

function getNumeroCasuale(min, max) {

  return Math.floor(Math.random()*(max - min + 1) + min);
  
}

