//JS RESET
console.log('JS OK')

//! OPERAZIONI INIZIALI:

// CREO un array di 10 ggetti
const zucchine = [
    { varieta: 'Varietà 1', peso: 10, lunghezza: 4 },
    { varieta: 'Varietà 2', peso: 13, lunghezza: 16 },
    { varieta: 'Varietà 3', peso: 4, lunghezza: 23 },
    { varieta: 'Varietà 4', peso: 11, lunghezza: 6 },
    { varieta: 'Varietà 5', peso: 2, lunghezza: 17 },
    { varieta: 'Varietà 6', peso: 5, lunghezza: 10 },
    { varieta: 'Varietà 7', peso: 7, lunghezza: 9 },
    { varieta: 'Varietà 8', peso: 3, lunghezza: 8 },
    { varieta: 'Varietà 9', peso: 6, lunghezza: 27 },
    { varieta: 'Varietà 10', peso: 14, lunghezza: 4 },
  ];

// CREO un contatore per il pesoTotale
let pesoTotale = 0;

//! LOGICA EFFETTIVA:

// CREO un arrow function (servendomi di forEach)
zucchine.forEach(zucchina => {
    pesoTotale += zucchina.peso;
  });

// STAMPO in console il risultato
console.log(`Il peso totale di tutte le zucchine è ${pesoTotale} g`);