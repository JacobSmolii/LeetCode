// 1184. Distance Between Bus Stops
// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

// Example 1:
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// Example 2:

// Input: distance = [1,2,3,4], start = 0, destination = 2
// Output: 3
// Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
// Example 3:

// Input: distance = [1,2,3,4], start = 0, destination = 3
// Output: 4
// Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

// Constraints:

// 1 <= n <= 10^4
// distance.length == n
// 0 <= start, destination < n
// 0 <= distance[i] <= 10^4

var distanceBetweenBusStops = function (distance, start, destination) {
  // takinng care of 'start' and 'end' first to avoid overall
  if (start > destination) [start, destination] = [destination, start];

  let total = distance.reduce((a, b) => a + b);
  let chunk = distance.slice(start, destination);
  let chunkTotal = chunk.reduce((a, b) => a + b);

  return Math.min(chunkTotal, total - chunkTotal);
};

// let distance = [1, 2, 3, 4];
// let start = 0;
// let destination = 3;

let distance = [7, 10, 1, 12, 11, 14, 5, 0];
let start = 7;
let destination = 2;

console.log(distanceBetweenBusStops(distance, start, destination));
