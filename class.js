// JavaScript code to illustrate pop() function
// to remove array elements

function func() {
	let arr = ["shift", "splice", "filter", "pop"];

	// Popping the last element from the array
	let popped = arr.pop();
	console.log("Removed element: " + popped);
	console.log("Remaining elements: " + arr);
}
func();

// Declare and initialize an array
let array = ["pop", "splice", "filter", "shift"]

console.log("Original array: " + array + "<br>")

// Loop run while array length not zero
while (array.length) {

	// Remove elements from array
	array.pop();
}
console.log("Array Length: " + array.length)

// JavaScript code to illustrate shift() method
// to remove elements from array
function func() {
	let arr = ["ram", "shyam", "arun", "sundar"];

	// Removing the first element from array
	let shifted = arr.shift();
	console.log("Removed element: " + shifted);
	console.log("Remaining elements: " + arr);
}
func();

// JavaScript code to illustrate splice() function

function func() {
	let arr = ["arun", "splice", "filter", "gyan"];

	// Removing the specified element from the array
	let spliced = arr.splice(1, 1);
	console.log("Removed element: " + spliced);
	console.log("Remaining elements: " + arr);
}
func();


// JavaScript to illustrate filter() method
function isPositive(value) {
	return value > 0;
}

function func() {
	let filtered = [105, 300, 24, -200, 1000].filter(isPositive);
	console.log("Positive elements in array: " + filtered);
}
func();


let removeElement = (array, n) => {
	let newArray = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] !== n) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};

let passed_in_array = [1, 2, 3, 4, 5];
let element_to_be_removed = 2;
let result = removeElement(passed_in_array, element_to_be_removed);

console.log("Remaining elements: " + result);





