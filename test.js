'use strict'
var test = require('tape')
var randomZ = require('../src/random-z')


var N = 10000
var sum = 0
var sum2 = 0
for (var i=0; i<N; i++) {
	var rnd = randomZ()
	sum += rnd
	sum2 += rnd * rnd
}

var average = sum/N
var variance = sum2/N - average*average


test('random-z', function(t) {

	t.comment('samples should have an average of 0')
	t.true( Math.abs(average) < 0.02, 'average of ave near 0 - actual: '+ average.toFixed(4) )

	t.comment('samples should have a variance of 1')
	t.true( Math.abs(variance - 1) < 0.02, 'average of var near 1 - actual: ' + variance.toFixed(4) )

	t.end()
})
