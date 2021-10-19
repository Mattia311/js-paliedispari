//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const askWord = prompt('Inserisci una parola');
const text = document.getElementById('text');

function reverse(s){
    return s.split("").reverse().join("");
}

var contrario = reverse(askWord)
console.log(contrario)

function wordPoli (message) {
    if(message == contrario) {
      return 'è una parola polindroma'
    } 
    else {
      return 'non è una parola polindroma'
    }
  }
  
  if (wordPoli(askWord) == 'è una parola polindroma') {
    console.log('questa parola è polindroma: ' + askWord);
    text.innerHTML = ('questa parola è polindroma: ' + askWord)

  }
  else {
    console.log('questa parola non è polindroma: ' + askWord);
    text.innerHTML = ('questa parola non è polindroma: ' + askWord)
  
  }





//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


const askPariDispari = prompt('Scegli tra pari e dispari');
const typeNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log('Hai scelto ' + askPariDispari, 'e il numero ' + typeNumber);

const min = 1
const max = 5

function getRandomIntInclusive(min, max) {
    
    return Math.floor(Math.random() * (5 - 1 + 1) + 1); 
}

  var result = getRandomIntInclusive(min, max)

  console.log('Il numero random generato per il computer è : ' + result);

  const somma = typeNumber + result;
  console.log('questa è la somma tra il tuo numero e quello del computer: ' + somma);


  function pariDispari () {
    if(somma % 2 == 0) {
      return 'pari'
    } 
    else {
      return 'dispari'
    }
  };

  pariDispari(somma);
  
  if (pariDispari(somma) == 'pari') {
    console.log('questo numero è pari' , somma);
  }
  else {
    console.log('questo numero è dispari' , somma);
  };

  if((askPariDispari == 'pari') && (pariDispari(somma) == 'pari')) {
      console.log('Il numero uscito dalla somma del tuo numero e quello generato in modo random dal computer è pari, hai vinto: ' + somma);

  } 
  else if((askPariDispari == 'pari') && (pariDispari(somma) == 'dispari')) {
      console.log('Il numero uscito dalla somma del tuo numero e quello generato in modo random dal computer è dispari, hai perso: ' + somma);
  }
   else if((askPariDispari == 'dispari') && (pariDispari(somma) == 'dispari')) {
      console.log('Il numero uscito dalla somma del tuo numero e quello generato in modo random dal computer è dispari, hai vinto: ' + somma);
   } 
   else if((askPariDispari == 'dispari') && (pariDispari(somma) == 'pari')) {
      console.log('Il numero uscito dalla somma del tuo numero e quello generato in modo random dal computer è pari, hai perso: ' + somma);
   };
  

  

