let N = Number(prompt("inserisci quanti array vuoi creare"));
let x = 1
while (N != 0) {
    array = [];
    for(let i = 0 ; i < 10 ; i++){
        array.push(Math.floor(Math.random()*100)+1);
    }
    console.log(x,array);
    x ++;
    N --;
}