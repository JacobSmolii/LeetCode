// 1436. Destination City
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

// Constraints:

// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.

var destCity = function (paths) {
  let map = new Map(paths);

  // we store everything into the map and then check if the city2 doesn't have value as a key in map
  for (ans of map.values()) {
    if (!map.has(ans)) return ans;
  }
};

// let paths = [
//   ['London', 'New York'],
//   ['New York', 'Lima'],
//   ['Lima', 'Sao Paulo'],
// ];

let paths = [
  ['a', 'b'],
  ['c', 'd'],
  ['b', 'e'],
  ['e', 'c'],
  ['d', 'end'],
];

// let paths = [
//   ['A', 'B'],
//   ['C', 'A'],
// ];

// let paths = [
//   ['B', 'C'],
//   ['D', 'B'],
//   ['C', 'A'],
// ];

console.log(destCity(paths));
