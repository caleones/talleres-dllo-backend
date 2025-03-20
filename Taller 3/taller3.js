function desglosarString (cadena, eleccion) {
    /*
        Desarrolle una funcion llamada desglosarString que reciba una string, y la string "vocales" o "consonantes", y retorne la cantidad de vocales o consonantes de la string recibida.
    */

    let vocales = ["a", "e", "i", "o", "u"]
    let consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    let splitString = cadena.toLowerCase().split("")

    if (eleccion == "vocales") {
        let cantidadVocales = 0
        for (let i=0; i<splitString.length; i++) {
            if (vocales.includes(splitString[i])) {
                cantidadVocales++
            }
        }
        return cantidadVocales
    } else {
        if (eleccion == "consonantes") {
            let cantidadConsonantes = 0
            for (let i=0; i<splitString.length; i++) {
                if (consonantes.includes(splitString[i])) {
                    cantidadConsonantes++
                }
            }
            return cantidadConsonantes
        }
    }
}

function twoSum (numeros, otroNumero) {
    /*
        Desarrolle una funcion llamada twoSum que reciba una lista de numeros enteros y otro numero entero y retorne los indices de los numeros del arreglo que sumados sean el otro numero.
    */

    for (let i=0; i<numeros.length; i++) {
        for (let j=i+1; j<numeros.length; j++) {
            if (numeros[i] + numeros[j] == otroNumero) {
                return [i, j]
            }
        }
    }

    return false
}

function conversionRomana(cadenaRomana) {
    let simbolos = ["I", "V", "X", "L", "C", "D", "M"];
    let repetibles = ["I", "X", "C", "M"];
    let numeros = [1, 5, 10, 50, 100, 500, 1000];

    let splitRomana = cadenaRomana.split("");
    let suma = 0;

    for (let i = 0; i < splitRomana.length; i++) {
        // Obtener el valor actual
        let valorActual = numeros[simbolos.indexOf(splitRomana[i])];

        // Verificar si hay un siguiente símbolo y si se necesita restar
        if (i + 1 < splitRomana.length) {
            let valorSiguiente = numeros[simbolos.indexOf(splitRomana[i + 1])];

            if (valorActual < valorSiguiente) {
                // Si el valor actual es menor que el siguiente, es una resta
                suma += valorSiguiente - valorActual;
                i++; // Saltamos el siguiente símbolo
                continue; // No procesamos el símbolo actual de nuevo
            }
        }

        // Si no se necesita hacer una resta, solo sumamos el valor actual
        suma += valorActual;
    }

    return suma;
}


let palabra = "otorrinolaringologia"
console.log("La palabra " + palabra + " tiene " + desglosarString(palabra, "vocales") + " vocales")
console.log("La palabra " + palabra + " tiene " + desglosarString(palabra, "consonantes") + " consonantes")

let numeros = [1, 3, 4, 1, 2, 4, 6, 7, 9, 5]
let temporal = twoSum(numeros, 50)
if (temporal == false) {
    console.log("No hay dos números sumados en la lista que den como resultado el número que elegiste")
} else {
    console.log(temporal)
}
console.log(conversionRomana("XXXCCXI"))