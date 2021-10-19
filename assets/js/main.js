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