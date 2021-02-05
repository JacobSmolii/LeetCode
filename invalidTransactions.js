// 1169. Invalid Transactions
// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.

var invalidTransactions = function (transactions) {
  let check = new Array().fill(false);
  let rest = [];

  for (let i = 0; i < transactions.length; i++) {
    let [name1, time1, amount1, cit1] = transactions[i].split(',');

    if (amount1 > 1000) {
      if (!check[i]) {
        rest.push(transactions[i]);
        check[i] = true;
      }
    }

    for (let j = i + 1; j < transactions.length; j++) {
      let [name2, time2, amount2, cit2] = transactions[j].split(',');

      if (name1 == name2 && cit1 != cit2 && Math.abs(time1 - time2) <= 60) {
        if (!check[i]) {
          rest.push(transactions[i]);
          check[i] = true;
        }
        if (!check[j]) {
          rest.push(transactions[j]);
          check[j] = true;
        }
      }
    }
  }
  return rest;
};

// let transactions = [
//   'alice,20,800,mtv',
//   'alice,50,100,mtv',
//   'alice,51,100,frankfurt',
// ];

let transactions = [
  'alice,20,800,mtv',
  'bob,50,1200,mtv',
  'alice,20,800,mtv',
  'alice,50,1200,mtv',
  'alice,20,800,mtv',
  'alice,50,100,beijing',
];

console.log(invalidTransactions(transactions));
