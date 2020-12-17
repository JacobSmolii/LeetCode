// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
	let j = 0;
	for (elem of nums) {
		if (elem != 0) {
			nums[j] = elem;
			j++;
		}
	}

	while (j < nums.length) {
		nums[j] = 0;
		j++;
	}
	return nums;
};

const array = [0, 1, 0, 3, 0, 12];
console.log(moveZeroes(array))

// bigO
// Time: O(2*N) = O(N) - linier algorithm
// Space: O(1)
