// 941. Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

var validMountainArray = function (arr) {
	if (arr.length < 3) return false;

	let i = 1;
	while (i < arr.length && arr[i] > arr[i - 1])
		i++;
	if (i == 1 || i == arr.length) return false
	while (i < arr.length && arr[i] < arr[i - 1])
		i++;

	return i == arr.length;
}


// let array = [0, 2, 3, 4, 5, 2, 5, 0];
// let array = [0, 2, 3, 3, 5, 2, 1, 0];
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(validMountainArray(array))
