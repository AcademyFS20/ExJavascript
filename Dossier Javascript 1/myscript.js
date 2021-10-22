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
         


//WORKSHOP1
function moneySum (array){

let count = 0
for (var i = 0; i <= array.length; i++){
    return count = count + array[i].budget
    }

}

console.log(moneySum([
    { name: "amine", age: 21, budget: 15000 },
    { name: "hamid",  age: 32, budget: 40000 },
    { name: "soufiane",  age: 16, budget: 3500 }
    ]))





//WORKSHOP2
function shipping(array){

let totalOrder = array.reduce(function (acc, cur) {
    return acc + cur.msgCount
},0);

if (totalOrder > 50){
    return "True"
}
else {    
    return "False"
}

}

console.log(shipping([
    { "tomate": 50.99, "thon": 50.99 }
]));





//WORKSHOP 4:
function bestNote(array){

if (array.length < 1) {
    return array.push((array1.name) + Math.max(array.notes))
}

else {
    return  array.name + [0]
}
}
console.log(bestNote([
    { name: "amine", notes: [3, 5, 4]}
  ]))







