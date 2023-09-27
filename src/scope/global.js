//variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignamos
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global

function bestFruit () {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);