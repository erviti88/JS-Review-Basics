/* Iteración #6: Función swap

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.

Sugerencia de array: */

const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {

    [array[index1], array[index2]] = [array[index2], array[index1]];
    
    return array;
}

console.log(swap(names, 1, 2));
console.log(swap(names, 3, 0));
