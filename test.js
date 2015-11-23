'use strict'
var test = require('tt')
// var t = require('assert')
var sumProduct = require('./index.js')

test('sum-product', function (t) {
  t.equal(sumProduct(), 0, 'should be 0 if no inputs provided')
  t.ok(isNaN(sumProduct(1, 2)), 'should be NaN if inputs are not arrays')
  t.ok(isNaN(sumProduct([], 2)), 'should be NaN if inputs are not arrays')
  t.equal(sumProduct([], []), 0, 'should be 0 if inputs are empty')
  t.equal(sumProduct([1], [1]), 1, 'should work with unit arrays')
  t.equal(sumProduct([1, 1]), 2, 'should work with a single array')
  t.equal(sumProduct([1, 1], [1, 1], [1, 1], [1, 1], [1, 1]), 2, 'should work with 2 arrays')
  t.equal(sumProduct([1, 1], [1, 1], [1, 1], [1, 1], [1, 1]), 2, 'should work with many arrays')

  t.end()
})
