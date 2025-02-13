function punto1 (listaStrings) {
    /*
    Desarrolle una función que reciba una lista de strings, y retorne la cantidad de strings con longitud mayor a 25 caracteres.
    */

    let cantidad = 0;

    for (let i = 0; i < listaStrings.length; i++) {
        if (listaStrings[i].length > 25) {
            cantidad++
        }
    }

    return cantidad
}

function getRandomString (length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function punto2 () {
    /*
    Desarrolle una función que retorne el resultado de una exponenciación dada la base y el exponente sin utilizar el operador respectivo.
    */


}

function punto3 () {
    /*
    Desarrolle una función que retorne las ocurrencias de un elemento en una lista.
    */


}

function punto4 () {
    /*
    Desarrolle una función que retorne el elemento n de la serie Fibonacci.
    */

}

function punto5 () {
    /*
    Desarrolle una función que retorne si una lista tiene duplicados o no.
    */


}

function punto6 () {
    /*
    Desarrolle una función que retorne el elemento mas repetido de una lista.
    */


}

function punto7 () {
    /*
    Desarrolle una función que ordene una lista desordenada.
    */


}

function punto8 () {
    /*
    Desarrolle una función que retorne el n-esimo elemento mas grande de una lista.
    */


}

function punto9 () {
    /*
    Desarrolle una función que retorne el producto maximo de dos numeros de una lista.
    */


}

function punto10 () {
    /*
    Desarrolle una función que realice una busqueda binaria de un elemento (y lo retorne)
    */


}

let exampleList = []
for (let i = 0; i < 100; i++) {
    let randomLength = Math.floor(Math.random() * 100) + 1;
    exampleList.push(getRandomString(randomLength));
}

console.log("La cantidad de cadenas aleatorias hasta longitud de 100 que tienen una longitud mayor a 25 caracteres es:", punto1(exampleList));