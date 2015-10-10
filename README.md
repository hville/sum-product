# normal-z

1. [Introduction](#introduction)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Test](#test)
1. [License](#license)


## Introduction

Simple and small standalone random number generator for **Z**, the **standard normal distribution** with an average of 0 and a variance of 1 (*μ=0, σ=1*).
The random number generator uses the [Marsaglia polar method](http://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution).
The additional independent random sample is cashed for the next call.


## Installation

In node, from the root of your project folder type `npm install --save random-z`.


## Usage

The function takes no parameters and returns a random number.

```
	var randomZ = require('random-z')
	var newRandomSample = randomZ()
```


## Test

In node, from the root of your project folder type `npm test`.


## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)
