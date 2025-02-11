function convertidorTemp (celsius) {
    /*
    Punto 1
    */

    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

function resolvedor (decision, a, b, c) {
    /**
    Punto 2
    */

    let x

    if (decision) {
        x = -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2 * a;
    } else {
        x = -b - Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2 * a;
    }

    return x;
}

function mejorParidad (numero) {
    /*
    Punto 3 
    */

    if (numero % 2 == 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

function peorParidad (numero) {
    /*
    Punto 4
    */

    let jurados = 10
    let votos = 0
    let uribePreso = true

    for (let i = 0; i < jurados; i++) {
        if (numero % 2 == 0) {
            votos++;
        } else {
            votosContra++;
        }
    }

    if (votos == jurados & uribePreso) {
        return "El número es par y Uribe va preso"
    } else {
        return "El número es impar y Uribe va preso"
    }
}

let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));
console.log("Fahrenheit:", convertidorTemp(celsius));

let decision = prompt("Ingrese 'true' si quiere el valor de x que suma, 'false' para lo contrario:") === 'true';
let a = parseFloat(prompt("Ingrese el valor de a:"));
let b = parseFloat(prompt("Ingrese el valor de b:"));
let c = parseFloat(prompt("Ingrese el valor de c:"));
console.log("Resultado de resolvedor:", resolvedor(decision, a, b, c));

let numero = parseInt(prompt("Ingrese un número para los puntos 3 y 4:"));
console.log("Resultado de mejorParidad:", mejorParidad(numero));
console.log("Resultado de peorParidad:", peorParidad(numero));