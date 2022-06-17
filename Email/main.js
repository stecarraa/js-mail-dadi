// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo un array dentro al quale ci scrivo alcune mail

const mailList = ['stefano@caratozzolo.me', 'giulia@cartozzolo.me', 'marisella@caratozzolo.me', 'francesco@caratozzolo.me']

console.log(mailList)

// adesso attraverso un promt chiedo all'utente di inserire una mail che sarà quella che poi devo controllare


const userMail = prompt('Inserisci il tuo indirizzo email');

// adesso partendi dal presupposto che la mail dentro non ci sia facciamo partire un ciclo
// for che scorra tutti gli elementi dell' array fino a che non trova una mail corrispondente ed eventualmente 
//ci restituisca il risultato contrario

let mailExist = false

for(let i = 0; i < mailList.length; i++){
    if(userMail === mailList[i]){
        mailExist = true;
    }
   

}



if(mailExist == true){
    

document.getElementById('present').innerHTML='La mail: ' + userMail + ' esiste già, registrati con un\'altra mail '

}
else{


    document.getElementById('absent').innerHTML='La mail: ' + userMail + ' non è stata trovata, puoi procedere con la registrazione '

}

console.log(mailExist);
