// Gioco dei dadi (separatemente)
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero un numero casuale da 1 a 6 per il giocatore e lo stampo sia in console che pagina
let playerNumber = Math.floor((Math.random() * 6) + 1);

console.log(playerNumber)
document.getElementById('palyer-number').innerHTML='il tuo numero è:' + playerNumber


// genero un numero casuale da 1 a 6 per il computer e lo stampo sia in console che pagina
let computerNumber = Math.floor((Math.random() * 6) + 1);

console.log(computerNumber)
document.getElementById('pc-number').innerHTML='il numero del computer è:' + computerNumber

//entro nelle tre possibili casistiche e stampo gli eventuali risultati in pagina
if(playerNumber > computerNumber){
    document.getElementById('results').innerHTML="Il risultato del giocatore è più grande di quello del calcolatore : il Giocatore vince"

}
else if(playerNumber<computerNumber){
    document.getElementById('results').innerHTML="Il risultato del giocatore è più piccolo di quello del calcolatore : il Giocatore perde"
}
else{
    document.getElementById('results').innerHTML="Il risultato del giocatore è uguale a quello del calcolatore : il Giocatore non vince e non perde"

}