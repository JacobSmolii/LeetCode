// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function (a, b) {
  // this solution works with small numbers but not with the big
  //   function bitToDeci(num) {
  //     let rest = 0;
  //     for (let i = 0; i < num.length; i++) {
  //       rest = rest * 2 + Number(num[i]);
  //     }
  //     return rest;
  //   }

  //   a = bitToDeci(a);
  //   b = bitToDeci(b);
  //   let rest = a + b;
  //   return num.toString(rest);

  // this works with any big number
  // The notation 0b in front of a number is just an indicator that what follows is represented in binary.
  // BigInt represents whole numbers larger than 2^53 - 1
  let abin = `0b${a}`;
  let bbin = `0b${b}`;

  let rest = BigInt(abin) + BigInt(bbin);
  console.log(rest.toString(2));
};

// let a = '1010';
// let b = '1011';
// let a = '0';
// let b = '0';

let a =
  '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
let b =
  '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';
console.log(addBinary(a, b));
