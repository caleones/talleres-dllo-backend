function findMax (numeros) {
    /*
    Punto 1

    Desarrolle una funcion llamada findMax que reciba una lista de números por parámetro y retorne el mayor valor.
    */

    let max = 0;

    for (i=0; i<numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }

    return max;
}

function includes (numeros, numero) {
    /*
    Punto 2

    Desarrolle una funcion llamada includes que reciba una lista de números y un numero por parámetro y retorne un booleano representando si el numero se encuentra en la lista.
    */

    for (i=0; i<numeros.length; i++) {
        if (numero == numeros[i]) {
            return true;
        }
    }

    return false;
}

function sum (numeros) {
    /*
    Punto 3

    Desarrolle una funcion llamada sum que reciba una lista de números y retorne la suma de los elementos de la lista.
    */

    let suma = 0;

    for (i=0; i<numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}

function missingNumbers (numeros) {
    /*
    Punto 4

    Desarrolle una funcion llamada missingNumbers que reciba una lista de números y retorne una lista de los números faltantes entre el menor y mayor de la lista.
    */

    sortedNumeros = sort(numeros);

    //[2, 7, 11, 45] faltan 3, 4, 5, 6, ...
    // contador = 2
    // 7 - 3 = 4
    // con 11 y 7, faltan 8, 9, 10
    // 11 - 8

    let missingLista = [];

    /*
    Empezará con 2
    j se volverá 1 y llegará hasta 7-2(5) esto significa que faltan 4 números entre 7 y 2
    a la lista le meterá i+j, que en este caso será 2+j, es decir 2+1 = 3, que es uno de los valores faltantes
    
    para el siguiente j, ahora j será 2, sigue dentro del for, agregará 2+2, 4

    para el siguiente j, ahora j será 3, sigue dentro del for, agregará 2+3, 5

    para el siguiente j, ahora j será 4, sigue dentro del for, agregará 2+4, 6

    para el siguiente j, ahora j será 5, se sale del for, continúa con i=1 que es el siguiente valor de la lista

    ahora buscará entre 11 y 7 y repetirá el ciclo
    */

    for (i = 0; i < sortedNumeros.length - 1; i++) {
        for (j = 1; j < sortedNumeros[i + 1] - sortedNumeros[i]; j++) {
            missingLista.push(sortedNumeros[i] + j);
        }
    }

    return missingLista;
}

function sort(lista) {
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

    return lista;
}

// Prueba de findMax
const nums = [3, 5, 7, 2, 8, 1];
console.log("Prueba de findMax:", findMax(nums));  // Debería retornar 8

// Prueba de includes
console.log("Prueba de includes (5):", includes(nums, 5));  // Debería retornar true
console.log("Prueba de includes (10):", includes(nums, 10));  // Debería retornar false

// Prueba de sum
console.log("Prueba de sum:", sum(nums));  // Debería retornar 26

// Prueba de missingNumbers
const nums2 = [2, 7, 11, 45];
console.log("Prueba de missingNumbers:", missingNumbers(nums2));  // Debería retornar [3, 4, 5, 6, 8, 9, 10]