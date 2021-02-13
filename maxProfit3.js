// 714. Best Time to Buy and Sell Stock with Transaction Fee
// Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

// You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

// Return the maximum profit you can make.

// Example 1:
// Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// Buying at prices[0] = 1
// Selling at prices[3] = 8
// Buying at prices[4] = 4
// Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Note:

// 0 < prices.length <= 50000.
// 0 < prices[i] < 50000.
// 0 <= fee < 50000.

var maxProfit = function (prices, fee) {
  let profit = 0;
  let stock = -prices[0]; // profitable deal of the day (on each i-th)

  for (let i = 1; i < prices.length; i++) {
    if (profit < prices[i] + stock - fee) {
      profit = prices[i] + stock - fee;
    }

    if (stock < profit - prices[i]) {
      stock = profit - prices[i];
    }
  }

  return profit;
};

// let prices = [9, 8, 7, 1, 2]; // 0
// let fee = 3;

let prices = [1, 3, 2, 8, 4, 9]; // 8
let fee = 2;

// let prices = [1, 3, 7, 5, 10, 3]; // 6
// let fee = 3;

console.log(maxProfit(prices, fee));
