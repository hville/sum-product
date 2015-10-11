function sumProduct(array) {  // can use any number of arrays
	var sum = 0
	var N = Array.isArray(array) ? array.length : 0
	for (var i=0, args=[]; i<arguments.length; i++) {
		// if arrays don't have the same length, we use the shortest one
		if (!Array.isArray(arguments[i])) return NaN
		args[i] = arguments[i]
		if (args[i].length < N) N = args[i].length
	}

	for (var i=0; i<N; i++) {
		var prod = 1
		for (var j=0; j<args.length; j++) prod *= args[j][i]
		sum += prod
	}
	return Number(sum)
}


module.exports = sumProduct