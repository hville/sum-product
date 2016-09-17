module.exports = sumProduct

/**
 * @param  {array} array - first source array
 * @param  {array} [other] - any number of additional arrays
 * @return {number} sum of the product
 */
function sumProduct (array /*other arrays*/) {
	if (!arguments.length) return 0
	if (!Array.isArray(array)) return NaN
	var dim = arguments.length,
			len = array.length,
			args = [array],
			sum = 0,
			err = 0,
			tot = 0

	for (var i = 1; i < dim; ++i) {
		if (!Array.isArray(arguments[i]) || arguments[i].length !== len) return NaN
		args[i] = arguments[i]
	}

	//modified Kahan Sum
	for (i = 0; i < len; ++i) {
		var prod = 1
		for (var j = 0; j < args.length; ++j) prod *= args[j][i]
		sum += prod
		err += (sum - tot) - prod
		tot = sum
	}
	return sum - err
}
