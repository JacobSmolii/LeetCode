// Boats to Save People
// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
// Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

// Example 1:
// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)

// Example 2:
// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Example 3:
// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

var numRescueBoats = function (people, limit) {
	let boat_number = 0;
	let left = 0;
	let right = people.length - 1;

	people.sort((a, b) => a - b);

	while (left <= right) {
		if (left == right) {
			boat_number++;
			break;
		}
		if (people[left] + people[right] <= limit) {
			left++;
			right--;
			boat_number++;
		} else { // if bigger than the limit
			right--;
			boat_number++;
		}
	}
	return boat_number;
};

let people = [3, 5, 3, 4];
let limit = 5;

console.log(numRescueBoats(people, limit))
