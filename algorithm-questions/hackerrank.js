function reverseArray(a) {
  let reverseArray = [];
  const length = a.length;
  for (let i = 0; i < length; i++) {
    reverseArray.push(a.pop());
  }
  return reverseArray;
}

// X X X
//   X
// X X X
/* function hourglassSum(arr) {
    let count = 0;
    console.log(arr);
  
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr.length - 2; j++) {
        let t =
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
        if (t > count) {
          count = t;
        }
      }
    }
    return count;
  } */

/* function rotateLeft(d, arr) {
      let shiftedItem;
      let tempArray = [...arr]
      for(let i = 0; i <d; i++){
          shiftedItem = tempArray.shift()
          console.log("shiftedItem",shiftedItem)
          tempArray.push(shiftedItem)
      }
      return tempArray
  } */

function matchingStrings(strings, queries) {
  // Write your code here
  let count = 0;
  let array = [];
  queries.forEach((query) => {
    strings.forEach((string) => {
      if (query === string) {
        count++;
        console.log("count", count);
      }
    });
    array.push(count);
    count = 0;
  });
  return array;
}
console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
let coinFlip = 0;
let side = coinFlip == 1 ? true : false;
console.log(side);
