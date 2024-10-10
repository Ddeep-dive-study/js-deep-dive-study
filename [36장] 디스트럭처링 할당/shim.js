let arr = [1, 2, 3];
console.log(...arr);

let arr2 = [1, 2, 3];
let [temp, ...rest] = arr2;
console.log(temp, rest);

let [temp1, temp2, ...rest2] = arr2;
console.log(temp1, temp2, rest2);

// console.log([])
// const [a, b, c];
