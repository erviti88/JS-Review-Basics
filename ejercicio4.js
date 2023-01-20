/* Iteración #4: Métodos findArrayIndex

Crea una función llamada findArrayIndex que reciba como parametros un array de textos 
y un texto y devuelve la posición del array cuando el valor del array sea igual al valor 
del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return `La posicion de ${text} en el array es: ${i}`;
        }
    }
    return `El texto ${text} NO se encuentra en el array`;
}

console.log(findArrayIndex(animals, 'Salamandra'));
console.log(findArrayIndex(animals, 'Elefante'));