// --------------------------------------1-----------------------------------

// Fibonacci Series

/* function writeFibonacciSeries(number) {
  let final = "";
  let temp;
  for (let i = 1; i <= number; i++) {
    temp = fibonacciSeries(i);
    final += temp + " ";
  }
  console.log(final);
}

function fibonacciSeries(number) {
  if (number < 3) {
    return 1;
  }

  return fibonacciSeries(number - 1) + fibonacciSeries(number - 2); // tail recursion
}

writeFibonacciSeries(25); */

// --------------------------------------2-----------------------------------

// is Prime Number

/* function isPrimeNumber(number, i) {
  if (number <= 2) return n === 2 ? true : false;
  if (number === i) {
    return true;
  }
  if (number % i === 0) {
    return false;
  }

  return isPrimeNumber(number, i + 1);
}

const primeNumberOrNot = isPrimeNumber(97, 2);
console.log(primeNumberOrNot); */

// --------------------------------------3-----------------------------------

// factorial

/* function factorial(number) {
  if (number < 2) {
    return 1;
  }

  return number * factorial(number - 1);
}

const fac = factorial(5);
console.log(fac); */

// --------------------------------------4-----------------------------------

// Math operations

/* function sum(number) {
  if (number === 0) {
    return 0;
  }
  return number + sum(number - 1);
}

function sumForEvenNumber(number) {
  if (number === 0) {
    return 0;
  }
  if (number % 2 === 1) {
    return sumForEvenNumber(number - 1);
  }
  return number + sumForEvenNumber(number - 1);
}

function pow(number, power) {
  if (power === 1) {
    return number;
  }
  return number * pow(number, power - 1);
}

const normalSum = sum(5);
const evenSum = sumForEvenNumber(5);
const powResult = pow(2, 6);
console.log("normal sum: ", normalSum);
console.log("even sum", evenSum);
console.log("powResult", powResult); */

// --------------------------------------5-----------------------------------

// pascal \

/* function triangle(number) {
  let string = "";
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
      string += `${pascal(row, col)} `;
    }
    string += "\n";
  }
  console.log(string);
}

function pascal(row, column) {
  if (column > row) {
    return 0;
  }
  if (column <= 1 || row <= 1) {
    return 1;
  }
  return pascal(row - 1, column) + pascal(row - 1, column - 1);
}

triangle(10); */

// --------------------------------------5-----------------------------------

// search nested object
/* function search(obj, value) {
  if (typeof obj !== "object") {
    return obj === value;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && search(obj[key], value)) {
      return true;
    }
  }

  return false;
}

const isHere = search(
  {
    level_1: {
      level_2: {
        level_3: {
          level_4: {
            level_5: {
              level_6: {
                value: 12,
              },
            },
          },
        },
      },
    },
  },
  12
);
console.log(isHere); */

// --------------------------------------6-----------------------------------

//search leaf

// last leafs
/* function search_leaf(tree) {
  if (!tree.left && !tree.right) {
    return tree.value;
  }
  if (tree.left) {
    let l = search_leaf(tree.left);
    if (l) {
      console.log(l);
    }
  }
  if (tree.right) {
    let l = search_leaf(tree.right);
    if (l) {
      console.log(l);
    }
  }
}

console.log(
  search_leaf({
    value: 8,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 10,
      left: null,
      right: {
        value: 14,
        left: {
          value: 13,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  })
); */

// --------------------------------------7-----------------------------------

//Leaf nodes on Binary Search Tree

/* function binary_search_tree(array) {
  if (array.length === 1) {
    console.log(array[0]);
    return;
  }
  const base = array[0];
  const right = array.findIndex((n) => n > base);
  binary_search_tree(array.slice(1, right));
  binary_search_tree(array.slice(right));
}

binary_search_tree([890, 325, 290, 530, 965]); */

//??

// --------------------------------------8-----------------------------------

// Find Greatest common divisor

/* function GCD(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return GCD(number2, number1 % number2);
}

console.log(GCD(50, 100)); */

// --------------------------------------9-----------------------------------

//permutation of string

/* function findPerms(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCharsPermuted = findPerms(remainingChars);
    for (let j = 0; j < remainingCharsPermuted.length; j++) {
      const permutation = currentChar + remainingCharsPermuted[j];
      result.push(permutation);
    }
  }
  return result;
}
const final = findPerms("1243");
console.log(final); */
