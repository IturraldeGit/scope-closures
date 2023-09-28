function fruit() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana'
    }
    console.log(fruit1); //Se ejecuta - Function Scope
    console.log(fruit2); //No se ejecuta - Block Scope
    console.log(fruit3); //No se ejecuta - Block Scope
    var fruit4 = 'Strawberry'
}

fruit();



if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana'
}

console.log(fruit1); //Se ejecuta - Global Scope
console.log(fruit2); //No se ejecuta - Block Scope
console.log(fruit3); //No se ejecuta - Block Scope