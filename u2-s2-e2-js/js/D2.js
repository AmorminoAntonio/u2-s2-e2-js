/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.*/

 
 const num1 = 19;
 const num2 = 5;
  console.log(num1 > num2)


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


  if (num1 !== 5) {
    console.log("not equal");
  } else {
    console.log("great!");
  }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let val = 12

if (val % 5) {
  console.log("è divisibile");
} else {
  console.log("non è divisibile");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
  
let number3 = 13;
let number4 = 8;
if (number3 === 8 || number4 === 8) {
  console.log("Uno dei due numeri è uguale a 8");
} else if (number3 + number4 === 8) {
  console.log("La somma di ${number3} e ${number4} è 8");
} else if (number3 - number4 === 8) {
  console.log("La differenza tra ${number3} e ${number4} è 8");
} else {
  console.log("Nessuno dei numeri dati è uguale a otto e ne la somma ne la sottrazione tra i due da come risultato 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 350;
let b = 174;
let c = 98;
let maggiore = "";
let minore = "";
let intermedio = "";

if (a > b && a > c) {
  maggiore = a;
  if (b > c) {
    minore = c;
    intermedio = b;
  } else {
    minore = b;
    intermedio = c;
  }
}
if (b > a && b > c) {
  maggiore = b;
  if (a > c) {
    intermedio = a;
    minore = c;
  } else {
    minore = a;
    intermedio = c;
  }
}
if (c > a && c > b) {
  maggiore = c;
  if (b > a) {
    intermedio = b;
    minore = a;
  } else {
    minore = b;
    intermedio = a;
  }
}
console.log("L ordine dei numeri secondo il valore è:" + maggiore + ", " + intermedio + ", " + minore);





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let n = 37;
let s = "fabio";
let boo = true;

console.log(typeof 37, typeof "fabio", typeof true);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let x = 11
if (x%2 == 0) {
	console.log(messaggio = x + " è pari");
} else {
	console.log(messaggio = x + " è dispari");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
/*
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me)

me.city = "Toronto";
console.log(me.city)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let nums = []
console.log(nums);

nums.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(nums);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

nums.splice(9, 9, 100)
console.log(nums)


