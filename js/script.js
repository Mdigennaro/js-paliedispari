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
const pariODispari = prompt('Pari o Dispari?');
console.log('Hai scelto :', pariODispari);

//Chiedere un numero da 1 a 5
const numeroInserito = prompt('Scegli un numero da 1 a 5');
console.log('Hai scelto il numero ',numeroInserito);

//Estrarre il numero random il numero del computer
const numeroCpu = getNumeroCasuale(1, 5);

console.log('Il numero del computer è ', getNumeroCasuale(1, 5));


//sommiamo i due numeri
let mioRisultato = calcolo( numeroInserito , numeroCpu);
console.log('A',mioRisultato);





//function per numero random da 1 a 5

function getNumeroCasuale(min, max) {

  return Math.floor(Math.random()*(max - min + 1));
  
}

//function per sommare
function calcolo(numeroInserito, numeroCpu){

  let risultato = numeroInserito + numeroCpu;
  console.log('B',risultato)
  return risultato;

}
