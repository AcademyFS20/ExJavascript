let scoreKarim = [16,45,80]
let scoreAmine = [19,40,99]

let averageKarim = scoreKarim.reduce((a,b) => (a+b))/ scoreKarim.length;
let averageAmine = scoreAmine.reduce((a,b) => (a+b))/ scoreAmine.length;

console.log(averageKarim)
console.log(averageAmine)


if (averageKarim > averageAmine){
    console.log(`The winner is Karim with an average score of ${averageKarim}`);
}

else if (averageAmine > averageKarim) {     
    console.log(`The winner is Amine with an average score of ${averageAmine}`);
}

else{
    console.log('Amine and Karim have the same score.')
}
         



