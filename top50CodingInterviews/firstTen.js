// 1-) Fibonacci series

/* function writeFibonacci(number) {
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += fibonacci(i) + " ";
  }
  console.log(result);
}

function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

writeFibonacci(10);
 */
//print number O(N) fibonacci O(N) => total O(N^2)

// 2-) prime number

/* function prime(number, i) {
  if (number <= 2) return number === 2 ? true : false;
  if (number === i) {
    return true;
  }
  if (number % i === 0) {
    return false;
  }
  return prime(number, i + 1);
}
console.log(prime(7, 2)); */
// 4n -> O(n)

// 3-) string palindrome

/* const isPalindrome = function (str) {
  let arrayStr = str.split("");
  let lastStr = "";
  for (let i = 0; i < str.length; i++) {
    lastStr += arrayStr.pop();
  }
  if (lastStr.toLocaleLowerCase() === str.toLocaleLowerCase()) {
    return true;
  } else return false;
};

console.log(isPalindrome("Pbobp")); */

// n n^2 +2 => O(n^2)

// 4-) integer palindrome ** Didnt solve

/* const isIntegerPalindrome = function (number) {
  let palindrome = number;
  let reverse = 0;

  while (palindrome != 0) {
    let remainder = palindrome % 10;
    reverse = reverse * 10 + remainder;
    palindrome = Math.floor(palindrome / 10);
  }

  if (number == reverse) {
    return true;
  }
  return false;
};
console.log(isIntegerPalindrome(54345)); */

// 3n + 3 => O(n)

// 5-) Amstrong Number

/* const isAmstrongNumber = function (number) {
  let tempNumber = number;
  let result = 0;
  while (tempNumber != 0) {
    let remaining = tempNumber % 10;

    result += Math.pow(remaining, 3);

    tempNumber = Math.floor(tempNumber / 10);
  }
  if (result === number) return true;
  else return false;
};

console.log(isAmstrongNumber(371)); */

// 3n + 4 => O(n)

// 6-) Avoid deadlock

// 7-) Factorial

/* function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const factorialWithoutRecursion = function (number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
};

console.log("factorialRecursive ", factorial(5));
console.log("factorialWithoutRecursion", factorialWithoutRecursion(5)); */

// first factorial O(n) second factorial also O(n)

// 8-) Reverse a String

/* function reverseString(str) {
  if (str === null || str.isEmpty) return str;
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str.charAt(i);
  }
  return reverseString;
}

console.log(reverseString("naber")); */

// n +2 => O(n)

// 9-) Remove Duplicates in array

/* function removeDuplicates(arr) {
  let set = [...new Set(arr)];

  return set;
}
const arr = ["a", "a", "b", "c", "c"];
const arr1 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 1, 1, 2, 3];
console.log(removeDuplicates(arr1)); */

// O(n)

// 10-) print pyrmaid pattern --> work some

function prymaidPattern() {
  let n = 5;
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    // printing stars
    for (let k = 0; k < 2 * i - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

prymaidPattern();

// O(n^2)
