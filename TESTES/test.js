/**
 *
 * @param {Array<number>} arr
 * @param {number} num
 */
function buscar_numero(arr, num) {
    if (num <= 0.0) return -1; // Verifica se o numero buscado é igual ou menor que 0, e devolve -1 caso for verdade

    let temp = arr.filter((n) => n === num); // Filtra todos os elementos da array buscando pelo numero que foi fornecido em num
    if (temp.length > 0) return temp[0];

    num--; // Subtrai 1 do numero fornecido
    temp = arr.filter((n) => n === num); // Filtra todos os elementos da array buscando pelo numero que foi fornecido em num
    if (temp.length > 0) return temp[0];

    return -1; // Caso nenhum dos filtros de resultado, devolve -1
}

console.log(buscar_numero([1, 2, 2, 3, 4, 5, 6, 1000, 2], 9));
