'use strict'
var c = require('cotest')
var sumProduct = require('./index.js')

c('sum-product, input types', function () {
	c('===', sumProduct(), 0) // should be 0 if no inputs provided
	c('===', isNaN(sumProduct(1, 2)), true) // should be NaN if inputs are not arrays
	c('===', isNaN(sumProduct([], 2)), true) // should be NaN if inputs are not arrays
	c('===', sumProduct([], []), 0) // should be 0 if inputs are empty
	c('===', sumProduct([1], [1]), 1) // should work with unit arrays
	c('===', sumProduct([1, 1]), 2) // should work with a single array
	c('===', sumProduct([1, 1], [1, 1]), 2) // should work with 2 arrays
	c('===', sumProduct([1, 1], [1, 1], [1, 1], [1, 1], [1, 1]), 2) // should work with many arrays
})
c('sum-product, results', function () {
	c('===', sumProduct([1,1],[1,1],[1,1]), 2)
	c('===', sumProduct([-1,1],[1,1],[1,1]), 0)
	c('===', sumProduct([-1,1],[1,-1],[1,-1]), 0)
})
c('handle destructive error cancellation', function () {
	var epsilon = Number.Epsilon || Math.pow(2, -52)
	c('===', sumProduct([1 + epsilon, 1, 1 + epsilon],[1, 1 + epsilon, -1]), 1 + epsilon)
	c('===', sumProduct([1, -0.01],[0.1,0.1],[0.01,1]), 0)
	c('===', sumProduct([1, -0.01],[0.1, -0.1],[0.01,1]), 0.002)
	c('<', sumProduct([0.1, -0.1],[-0.2, 0.2],[0.3, 0.3]) -0.012, epsilon)
	c('<', sumProduct([0.1, 0.1],[0.2, -0.2],[0.3, -0.3]) - 0.012, epsilon)
})
