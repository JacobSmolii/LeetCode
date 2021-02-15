// 122. Best Time to Buy and Sell Stock II
// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Constraints:

// 1 <= prices.length <= 3 * 10 ^ 4
// 0 <= prices[i] <= 10 ^ 4

var maxProfit = function (prices) {
  let rest = 0;
  //   let minBuy = prices[0];
  let minBuy = Infinity;
  let curr = 0;
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i - 1]);

    curr = prices[i] - minBuy;
    if ((curr > 0 && prices[i + 1] < prices[i]) || curr > max) {
      if (curr > max) max = curr;
    }
    if (prices[i + 1] < prices[i] || i == prices.length - 1) {
      minBuy = prices[i];
      rest += max;
      max = 0;
    }
  }
  return rest;
};

// let arr = [7, 1, 5, 3, 6, 4];
// let arr = [1, 2, 3, 4, 5];
let arr = [7, 6, 4, 3, 1];

console.log(maxProfit(arr));