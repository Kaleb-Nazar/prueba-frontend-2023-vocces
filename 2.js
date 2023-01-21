// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
  let count = {};
  let only_numbers = [];
  let numbers_object = [];

  array.forEach((element) => {
    if (!count[element]) {
      count[element] = 1;
    } else {
      count[element]++;
    }
  });

  for (let num in count) {
    numbers_object.push({ num: num, count: count[num] });
  }

  numbers_object.sort((a, b) => {
    return b.count - a.count;
  });
  
  numbers_object = numbers_object.slice(0, 3);
  only_numbers = numbers_object.map(num => num.num);

  console.log(only_numbers);
  return only_numbers;
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(["a", 3, 2, "a", 2, 3, "a", 3, 4, "a", "a", 1, "a", 2, "a", 3]); // [ 'a', 3, 2 ]
