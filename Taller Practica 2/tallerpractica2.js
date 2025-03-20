const datos = require("./15-datos-parcial-01.json");

/*
    Para correr este archivo, utilicen el comando
    $ node tallerpractica2.js

    Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

    La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno (estudiante) {
    /*
        Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.
    */

    let nombresCursos = []
    
    for (let i=0; i<estudiante.cursos.length; i++) {
        nombresCursos.push(estudiante.cursos[i]["nombre"])
    }

    return nombresCursos
}

function puntoDos (estudiante) {
    /*
        Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.
    */

    let notaMaxima = 0

    for (let i=0; i<estudiante.cursos.length; i++) {
        if (estudiante.cursos[i]["nota"] > notaMaxima) {
            notaMaxima = estudiante.cursos[i]["nota"]
        }
    }

    return notaMaxima
}

function puntoTres (estudiante) {
    /*
        Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.
    */

    if (estudiante.altura > 1.65) {
        return true
    }

    return false
}

function puntoCuatro (estudiante) {
    /*
        Desarrolle una función que reciba un estudiante y retorne el nombre completo del estudiante.
    */

    return estudiante.nombre + " " + estudiante.apellido
}

function puntoCinco (estudianteUno, estudianteDos) {
    /*
        Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los estudiantes.
    */
    
    return (Math.abs(estudianteUno.altura - estudianteDos.altura)).toFixed(2)
}

function puntoSeis (estudiante) {
    /*
        Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo 'nombreCompleto' agregado.
    */

    return {
        ...estudiante,
        nombreCompleto: estudiante.nombre + " " + estudiante.apellido
    }
}

//suponiendo que le mandamos el estudiante 0
console.log("Los cursos del estudiante son: " + puntoUno(datos[0]))
console.log("La nota más alta del estudiante es: " + puntoDos(datos[0]))
if (puntoTres(datos[0])) {
    console.log("El estudiante mide más de 1.65 metros")
} else {
    console.log("El estudiante NO mide más de 1.65m")
}
console.log("El nombre completo del estudiante es: " + puntoCuatro(datos[0]))
console.log("La diferencia de altura entre los estudiantes es: " + puntoCinco(datos[0], datos[1]) + " metros")
console.log(puntoSeis(datos[0]))