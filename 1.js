// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
  let match_count;
  array.forEach((element) => {
    match_count = 0;

    array.forEach((item) => {
      if (element == item) {
        match_count++;
      }
    });

    if (match_count <= 1) {
      console.log(element);
      return element;
    }
  });
}

/**
 * TEST Ejercicio 1
 */
findUniq(["12", 10, "12", 11, 1, 11, 10, "12"]); // 1
findUniq([
  "Capitán América",
  "Hulk",
  "Deadpool",
  "Capitán América",
  "Hulk",
  "Wonder Woman",
  "Deadpool",
  "Iron Man",
  "Iron Man",
]); // 'Wonder Woman'
