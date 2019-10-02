//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2){
//     return arr1 + arr2 //something went wrong
//   }

function arrayPlusArray(arr1, arr2) {
	let newArray1 = arr1.reduce((a, b) => a + b)
	let newArray2 = arr2.reduce((a, b) => a + b)
	return newArray1 + newArray2
}

//additional solution

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
	return [].concat(...arrays).reduce((a, b) => a + b, 0)
}
