/* 
Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example: 
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  */

// Here are some possible solutions

function countSheeps(arrayOfSheep) {
	let numOfSheep = 0
	arrayOfSheep.forEach(sheep => {
		return sheep === true ? (numOfSheep += 1) : null
	})
	return numOfSheep
}

function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length
}

function countSheeps(arrayOfSheep) {
	var count = 0

	arrayOfSheep.forEach(function(sheep) {
		if (sheep) count++
	})

	return count
}
