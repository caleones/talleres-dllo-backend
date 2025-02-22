function punto1 (listaStrings) {
    /*
    Desarrolle una función que reciba una lista de strings, y retorne la cantidad de strings con longitud mayor a 25 caracteres.
    */

    let cantidad = 0;

    for (let i = 0; i < listaStrings.length; i++) {
        if (listaStrings[i].length > 25) {
            cantidad++;
        }
    }

    return cantidad;
}

function getRandomString (length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function punto2 (base, exponente) {
    /*
    Desarrolle una función que retorne el resultado de una exponenciación dada la base y el exponente sin utilizar el operador respectivo.
    */

    resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }

    return resultado;
}

function punto3 (lista, elemento) {
    /*
    Desarrolle una función que retorne las ocurrencias de un elemento en una lista.
    */

    let ocurrencias = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            ocurrencias++;
        }
    }

    return ocurrencias;
}

function getRandomElement (length) {
    const numbers = '0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return parseFloat(result);
}

function punto4 (nesimoElemento) {
    /*
    Desarrolle una función que retorne el elemento n de la serie Fibonacci.
    */
    return fibonacci(nesimoElemento);
}

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else {
        if (n == 1) {
            return 1;
        } else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }
}

function punto5 (lista) {
    /*
    Desarrolle una función que retorne si una lista tiene duplicados o no.
    */

    for (let i = 0; i < lista.length; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if (lista[i] == lista[j]) {
                return true;
            }
        }
    }

    return false;
}

function punto6 (lista) {
    /*
    Desarrolle una función que retorne el elemento mas repetido de una lista.
    */

    let masRepetido = '';
    let ocurrencias = 0

    for (let i = 0; i < lista.length; i++) {
        let contador = 0;
        for (let j = i+1; j < lista.length; j++) {
            if (lista[i] == lista[j]) {
                contador++;
            }            
        }
        if (contador > ocurrencias) {
            ocurrencias = contador;
            masRepetido = lista[i];
        }
    }

    return masRepetido;
}

function punto7 (lista) {
    /*
    Desarrolle una función que ordene una lista desordenada.
    */

    let temp

    for (let i = 0; i < lista.length; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if (lista[i] > lista[lista[j]]) {
                temp = lista[i];
                lista[i] = lista[j];
                lista[j] = temp;
            }
        }
    }
}

function punto8 (lista, nesimo) {
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

console.log("Estás visualizando el primer punto");
let exampleList = [];
let cantidadCadenas = parseFloat(prompt("Escriba la cantidad de cadenas aleatorias que desea generar: "));
let longitudCadena = parseFloat(prompt("Escriba el máximo tamaño de las cadenas: "));

for (let i = 0; i < cantidadCadenas; i++) {
    let randomLength = Math.floor(Math.random() * longitudCadena) + 1;
    exampleList.push(getRandomString(randomLength));
}

console.log(`De la cantidad de ${cantidadCadenas} cadenas aleatorias hasta longitud de ${longitudCadena} el total de cadenas que tienen una longitud mayor a 25 caracteres es:`, punto1(exampleList));

console.log("Estás visualizando el segundo punto");
let base = parseFloat(prompt("Escriba la base que desea elevar: "));
let exponente = parseFloat(prompt("Escriba el exponente al cual quiere elevar la base: "));

console.log(`El resultado de elevar ${base} al exponente ${exponente} es:`, punto2(base, exponente));

console.log("Estás visualizando el tercer punto");
let elementosList = [1, 2, 3, 4, 5, 5, 5, 5, 5];
let cantidadElementos = parseFloat(prompt("Escriba la cantidad de elementos aleatorios que desea generar: "));
let longitudElemento = parseFloat(prompt("Escriba el máximo tamaño de cada elemento: "))

for (let i = 0; i < cantidadElementos; i++) {
    let randomLength = Math.floor(Math.random() * longitudElemento) + 1;
    elementosList.push(getRandomElement(randomLength));
}

let elemento = parseFloat(prompt("Escriba el elemento al que le desea evaluar la ocurrencia: "))

console.log(`De la cantidad de ${cantidadElementos} elementos aleatorios hasta longitud de ${longitudElemento} el total de ocurrencias del elemento ${elemento} es:`, punto3(elementosList, elemento));

console.log("Estás visualizando el cuarto punto");
let nesimoElemento = parseFloat(prompt("Escriba qué elemento de la serie de Fibonacci que quiere conocer"))
console.log(`El valor de la serie de Fibonacci para el elemento número ${nesimoElemento} es:`, punto4(nesimoElemento));

console.log("Estás visualizando el quinto punto");
let exampleList5 = ['si', 'si', 'si'];
let cantidadElementos5 = parseFloat(prompt("Escriba la cantidad de elementos aleatorios que desea generar: "));
let longitudElemento5 = parseFloat(prompt("Escriba el máximo tamaño de los elementos: "));

for (let i = 0; i < cantidadElementos5; i++) {
    let randomLength = Math.floor(Math.random() * longitudElemento5) + 1;
    exampleList5.push(getRandomString(randomLength));
}

if (punto5(exampleList5)) {
    console.log("Hay repetidos");
} else {
    console.log("No hay repetidos")
}

console.log("Estás visualizando el sexto punto");
let exampleList6 = ['si', 'si', 'si', 'no', 'no', 'no', 'no'];
let cantidadElementos6 = parseFloat(prompt("Escriba la cantidad de elementos aleatorios que desea generar: "));
let longitudElemento6 = parseFloat(prompt("Escriba el máximo tamaño de los elementos: "));

for (let i = 0; i < cantidadElementos6; i++) {
    let randomLength = Math.floor(Math.random() * longitudElemento6) + 1;
    exampleList6.push(getRandomString(randomLength));
}

elementoMasRepetido = punto6(exampleList6)

if (elementoMasRepetido !== '') {
    console.log(`El elemento más repetido es:`, elementoMasRepetido);    
} else {
    console.log("No hay un elemento que se repita");
}