// 1672. Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function (accounts) {
  //   let rest = 0;
  //   let tmp = 0;

  //   for (let i = 0; i < accounts.length; i++) {
  //     for (let j = 0; j < accounts[i].length; j++) {
  //       tmp += accounts[i][j];
  //     }
  //     rest = Math.max(rest, tmp);
  //     tmp = 0;
  //   }
  //   return rest;

  // ...accounts.map() - spreading everything in the accounts, and going through each array using map
  // using reduce allowing us to execute all elements in the array

  return Math.max(...accounts.map((x) => x.reduce((a, b) => a + b)));
};

let accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];

console.log(maximumWealth(accounts));
