const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI

  /*
  1. Implemente una funcion que reciba los datos de estudiantes y retorne la cantidad de estudiantes en matricula condicional (promedio por debajo de 3.3).
  */

  let estudiantesCondicional = []

  for (i = 0; i < estudiantes.length; i++) {
    let promedio = 0
    for (x = 0; x < estudiantes[i]["cursos"].length; x++) {
      promedio = promedio + estudiantes[i]["cursos"][x]["nota"]
    }
    promedio = promedio/x

    if (promedio < 3.3) {
      estudiantesCondicional.push(estudiantes[i])
    }
  }

  return estudiantesCondicional;
}

function puntoDos(estudiantes) {
  // CODIGO DE PUNTO 2 AQUI

  /*
  2. Implemente una funcion que reciba los datos de estudiantes y retorne una lista con el nombre completo de cada estudiante.
  */

  let listaNombresEstudiantes = []

  for (i = 0; i < estudiantes.length; i++) {
    listaNombresEstudiantes[i] = estudiantes[i]["nombre"] + " " + estudiantes[i]["apellido"]
  }

  return listaNombresEstudiantes;
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI

  /*
  3. Implemente una funcion que reciba los datos de estudiantes y retorne una lista con los \_id de cada estudiante unicamente, tras ser ordenados ascendentemente por altura.
  */

  let listaIdAlturaOrdenada = []
  let copiaEstudiantes = estudiantes

  let temp

  for (i = 0; i < copiaEstudiantes.length; i++) {
    for (j = i+1; j < copiaEstudiantes.length; j++) {
      if (copiaEstudiantes[i]["altura"] > copiaEstudiantes[j]["altura"]) {
          temp = copiaEstudiantes[i]
          copiaEstudiantes[i] = copiaEstudiantes[j]
          copiaEstudiantes[j] = temp
      }
    }
  }

  for (i = 0; i < copiaEstudiantes.length; i++) {
    listaIdAlturaOrdenada[i] = copiaEstudiantes[i]["_id"]
  }

  return listaIdAlturaOrdenada;
}

function puntoCuatro(numeros) {
  // CODIGO DE PUNTO 4 AQUI

  /*
  4. Implemente una funcion que reciba una lista de numeros y retorne el promedio de la lista.
  */

  let promedio = 0
  for (i = 0; i < listanum.length; i++) {
    promedio = promedio + listanum[i]
  }

  return promedio/numeros.length;
}

function puntoCinco(palabra) {
  // CODIGO DE PUNTO 5 AQUI

  /*
  5. Implemente una funcion que reciba una palabra y retorne si la palabra es palindroma o no.
  */

  if (palabra == puntoSeis(palabra)) {
    return true
  } else {
    return false
  }
}

function puntoSeis(palabra) {
  // CODIGO DE PUNTO 6 AQUI

  /*
  6. Implemente una funcion que reciba una palabra y la invierta.
  */

  let vectorCaracteres = palabra.split("")
  let vectorCaracteresInvertido = []

  for (i = vectorCaracteres.length-1; i >= 0 ; i--) {
    vectorCaracteresInvertido.push(vectorCaracteres[i])
  }

  return vectorCaracteresInvertido.toString().replace(/(,)/gm,"")
}

function puntoSiete(lista, campo) {
// CODIGO DE PUNTO 7 AQUI

  /*
  7. Implemente una funcion que reciba una lista de objetos cualquiera y el nombre de un campo y retorne la lista de objetos ordenada ascendemente segun el valor del campo.
  */

  let temp

  for (i = 0; i < lista.length; i++) {
    for (j = i+1; j < lista.length; j++) {
      if (lista[i][campo] > lista[j][campo]) {
        temp = lista[i]
        lista[i] = lista[j]
        lista[j] = temp
      }
    }    
  }

  return lista

}

console.log(puntoUno(datos))
console.log(puntoDos(datos))
console.log(puntoTres(datos))

/*
listanum = [1, 3, 4, 5, 6, 7, 10, 89]
console.log("Con lista de ejemplo:", puntoCuatro(listanum))
let palabra = prompt("Escriba una palabra para los puntos cinco y seis: ")
console.log(`Palabra ${palabra} invertida es:`,puntoSeis(palabra))
console.log(`¿Es la palabra ${palabra} palíndroma?:`,puntoCinco(palabra))

let lista = [
  {
    "campo1": 19,
    "campo2": 145,
    "campo3": 12883
  },
  {
    "campo1": 50000,
    "campo2": 18800,
    "campo3": 5123
  },
  {
    "campo1": 3,
    "campo2": 304,
    "campo3": 1
  },
  {
    "campo1": 7,
    "campo2": 199120319,
    "campo3": 0
  }
]
let campo = prompt("Escriba el nombre del campo para ordenar (hint campo1, campo2, campo3): ")
console.log("Con lista de ejemplo", puntoSiete(lista, campo))
*/