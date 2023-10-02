function crearContador() {
    contador = 0
    
    return function incrementar () {
        contador = contador + 1;
        console.log(contador);
        return contador
    }; 
}

const contador1 = crearContador();
contador1();
contador1();
contador1();