const datos = require("./datos.json");

function puntoUno(estudiantes, extracurricular) {
  // CODIGO DE PUNTO 1 AQUI

  /*
  1. Implemente una función que reciba los datos de estudiantes y el nombre de una extracurricular y retorne los correos de los estudiantes que han estado involucrados en esa extra curricular, como por ejemplo los correos de los ~140 estudiantes que han estado involucrados en la extra curricular INNOVA.
  */

  let correos = []

  let forEstudiante = estudiantes.map(function(element) {
    //console.log(element)

    const estudiante = element
    const { info_extra_curriculares } = estudiante
    //console.log(info_extra_curriculares)

    let forExtracurricular = info_extra_curriculares.map(function(element) {
      //console.log(element)

      if (element["nombre"] == extracurricular) {
        correos.push(estudiante["info_personal"]["correo"])
      }
    })
  })

  console.log("Hay " + correos.length + " estudiantes que han cursado INNOVA en algún momento de sus vidas universitarias, estos son: \n")
  console.log(correos)
}

function puntoDos(estudiantes, busquedaSemestre) {
  // CODIGO DE PUNTO 2 AQUI

  /*
  2. Implemente una función que reciba los datos de estudiantes y un semestre y retorne el nombre completo del estudiante de mayor promedio, como por ejemplo el estudiante de quinto semestre con ~3.7 de promedio.
  */

  let mayorPromedio = 0
  let estudianteMayorPromedio = Object
  
  let forEstudiante = estudiantes.map(function(element) {
    const estudiante = element
    const { info_matricula } = estudiante

    let forMatricula = info_matricula.map(function(element) {
      const matricula = element
      const { semestre } = matricula
      const { notas } = matricula

      if (semestre == busquedaSemestre) {
        //console.log(element)

        let actualPromedio = findPromedio(notas)

        if (actualPromedio > mayorPromedio) {
          mayorPromedio = actualPromedio
          estudianteMayorPromedio = estudiante
        }
      }
    })
  })

  return "El estudiante de nombre " + estudianteMayorPromedio["info_personal"]["nombre"] + " " + estudianteMayorPromedio["info_personal"]["apellido"] + " es el estudiante con mayor promedio para el semestre " + busquedaSemestre + " con " + mayorPromedio + " de promedio"
}

function findPromedio(notas) {
  let forPromedio = []
  let promedio = 0

  forPromedio = notas.map(function(element) {
    promedio = promedio + element["nota"] * element["peso"]
  })

  return promedio
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI

  /*
  3. Implemente una función que reciba los datos de estudiantes y retorne la información personal de los estudiantes de primer semestre modificados para tener el siguiente formato:

  ```js
  {
    "gender": "M",
    "titulo": "Sr.",
    "nombreCompleto" : "Luis Molina",
    "primerNombre": "Luis",
    "primerApellido": "Molina",
    "altura": 182,
    "edad": 19,
    "nacimiento": "2004-10-14",
    "correo": "lmolina@uninorte.edu.co",
    "usuario": "lmolina"
  },
  ```
  */

  let newEstudiantes = []

  let forEstudiante = estudiantes.map(function(element) {
    const estudiante = element
    const { info_personal } = estudiante

    let forInfoPersonal = info_personal.map(function(element) {
      const info = element
      const { gender } = info
      const { nombre } = info
      const { apellido } = info
      const { correo } = info
      const { altura } = info
      const { nacimiento } = info

      newEstudiantes.push(createEstudiante(gender, nombre, apellido, correo, altura, nacimiento))
    })
  })

  return newEstudiantes
}

function createEstudiante(gender, nombre, apellido, correo, altura, nacimiento) {
  if (gender == "M") {
    titulo = "Sr."
  } else {
    titulo = "Sra."
  }

  let array = correo.split("@")
  let user = array[0]

  array = nacimiento.split("-")
  let edad = 2025 - array[0]
  
  const estudiante = {
    gender: gender,
    titulo,
    nombreCompleto: nombre + " " + "apellido",
    primerNombre: nombre,
    primerApellido: apellido,
    correo: correo,
    altura: altura,
    user,
    edad
  }

  return estudiante
}

function puntoCuatro(estudiantes, busquedaSemestre) {
  // CODIGO DE PUNTO 4 AQUI

  /*
  4. Implemente una función que reciba los datos de estudiantes y retorne el nombre completo del estudiante mas alto inscrito en Baloncesto en el semestre actual, como por ejemplo el estudiante que mide ~1.9m de altura.
  */

  let masAlto = 0
  let estudianteMasAlto = Object

  let forEstudiante = estudiantes.map(function(element) {
    const estudiante = element
    const { info_extra_curriculares } = estudiante

    let forExtracurricular = info_extra_curriculares.map(function(element) {
      const extraCurricular = element
      const { nombre } = extraCurricular
      const { semestre } = extraCurricular

      if (semestre == busquedaSemestre) {
        if (nombre == "Baloncesto") {
          if (estudiante["info_personal"]["altura"] > masAlto) {
            masAlto = estudiante["info_personal"]["altura"]
            estudianteMasAlto = estudiante
          }
        }
      }
    })
  })

  return estudianteMasAlto["info_personal"]["nombre"] + " " + estudianteMasAlto["info_personal"]["apellido"] + " con " + masAlto + " metros de altura"
}

//console.log(datos[0])
//console.log(datos[0]["info_extra_curriculares"][0]["nombre"])
//console.log(datos[0]["info_extra_curriculares"][0])

//console.log(puntoUno(datos, "INNOVA"))

console.log(puntoDos(datos, "5"))

//console.log(puntoCuatro(datos, "1"))