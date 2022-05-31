
//Visualizzare in pagina (html) 5 numeri casuali.
//Avviare un timer di 30 secondi
//Dopo 30 secondi, nascondere i numeri.
//L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
let numeriCasualiElement = document.getElementById("numeriCasuali");
let numeriIndovinatiElement = document.getElementById("numeriIndovinati");
let casualiLista = [];
for (let i = 0; i < 5; i++) {
    let numeroCasuale = Math.floor(Math.random() * 100);
    numeriCasualiElement.innerHTML += `<li>${numeroCasuale}</li>`;
    casualiLista.push(numeroCasuale);
}

const timer = setTimeout(() => {
    numeriCasualiElement.innerHTML = "";
}, 30000);



const timer2 = setTimeout(() => {
    let numeriUtente = [];
    for (let i = 0; i < 5; i++) {
        let numeroUtente = parseInt(prompt("Inserisci un numero"));
        numeriUtente.push(numeroUtente);
    }
    let numeriIndovinati = [];
    for (let i = 0; i < numeriUtente.length; i++) {
        let numeroUtente = numeriUtente[i];
        if (casualiLista.includes(numeroUtente)) {
            numeriIndovinati.push(numeroUtente);
        }

    }
    numeriCasualiElement.innerHTML = `<li>${casualiLista}</li>`;
    numeriIndovinatiElement.innerHTML = `<li>${numeriIndovinati.length} numeri indovinati: ${numeriIndovinati}</li>`;
}, 30009);
