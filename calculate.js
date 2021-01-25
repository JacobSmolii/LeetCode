// 227. Basic Calculator II
// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:
// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

// working with a stack
var calculate = function (s) {
  // deleting all the whitespaces off the string
  s = s.replace(/\s/g, '');

  function isDigit(char) {
    let c = parseInt(char);
    if (c >= 0 && c <= 9) return true;
    return false;
  }

  let stack = [];
  let sign = '+';
  let current = 0;

  // convert into the number
  //   push to the stack
  // very important to not forget for the last element of the string
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      current = current * 10 + Number(s[i]);
    }

    if (!isDigit(s[i]) || i == s.length - 1) {
      if (sign === '+') stack.push(current);
      else if (sign === '-') stack.push(-current);
      else if (sign === '*') stack.push(stack.pop() * current);
      else if (sign === '/') stack.push(~~(stack.pop() / current));
      sign = s[i];
      current = 0;
    }
  }

  return stack.reduce((a, b) => a + b);
};

let s = ' 3+5   / 2 ';
console.log(calculate(s));
