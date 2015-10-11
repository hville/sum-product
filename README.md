# sum-product

1. [Introduction](#introduction)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Test](#test)
1. [License](#license)


## Introduction

Simple and small standalone function to calculate the sum of the product of items in the parameters
`sumProduct([0,1], [2,3], [4,5]) //  0*2*4 + 1*3*5 = 15`

## Installation

In node, from the root of your project folder type `npm install --save sum-product`.


## Usage

The function takes any number of arrays.

```
	var sumProduct = require('sum-product')
	var result = sumProduct([0,1], [2,3], [4,5]) //  0*2*4 + 1*3*5 = 15
```


## Test

In node, from the root of your project folder type `npm test`.


## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)
