//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const array = [1,2,10,31,7,20,35,12];
let arrayp = [];
let arrayd = [];
let red = document.getElementById("red");
let green = document.getElementById("green");

for(let i = 0; i < array.length ; i++){
    if(array[i] % 2 === 0) {
        arrayp.push(array[i]);
        green.innerText = arrayp;
        green.style.color = "green";
    } else {
        arrayd.push(array[i]);
        red.innerText = arrayd;
        red.style.color = "red";
    }
}
console.log("array di partenza ",array);
console.log("array pari",arrayp);
console.log("array dispari",arrayd);